CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sku TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category_id UUID REFERENCES public.categories(id),
  description TEXT NOT NULL,
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
  comparison_price_cents INTEGER,
  condition TEXT NOT NULL CHECK (condition IN ('Excellent', 'Good', 'Fair', 'For restoration')),
  brand TEXT,
  colour TEXT,
  material TEXT,
  dimensions TEXT,
  stock_quantity INTEGER NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
  publication_status TEXT NOT NULL DEFAULT 'draft' CHECK (publication_status IN ('draft', 'published', 'archived')),
  is_featured BOOLEAN DEFAULT false,
  is_clearance BOOLEAN DEFAULT false,
  is_new_arrival BOOLEAN DEFAULT false,
  delivery_available BOOLEAN DEFAULT true,
  collection_available BOOLEAN DEFAULT true,
  damage_disclosure TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  storage_path TEXT NOT NULL,
  url TEXT NOT NULL,
  alt TEXT,
  caption TEXT,
  sort_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.inventory_movements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  movement_type TEXT NOT NULL CHECK (movement_type IN ('stock_in', 'stock_out', 'adjustment', 'restored', 'archived')),
  quantity_delta INTEGER NOT NULL,
  previous_quantity INTEGER NOT NULL,
  new_quantity INTEGER NOT NULL,
  notes TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.store_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  shop_name TEXT,
  country TEXT DEFAULT 'South Africa',
  currency TEXT DEFAULT 'ZAR',
  time_zone TEXT DEFAULT 'Africa/Johannesburg',
  city TEXT,
  address TEXT,
  whatsapp_number TEXT,
  contact_email TEXT,
  business_phone TEXT,
  delivery_areas TEXT,
  domain TEXT,
  collection_instructions TEXT,
  opening_hours TEXT,
  announcement_bar TEXT,
  homepage_banner TEXT,
  privacy_policy TEXT,
  terms TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_name TEXT,
  customer_phone TEXT,
  customer_email TEXT,
  enquiry_type TEXT CHECK (enquiry_type IN ('general', 'product', 'cart', 'delivery')),
  message TEXT,
  reference TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_products_slug ON public.products(slug);
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_status ON public.products(publication_status);
CREATE INDEX IF NOT EXISTS idx_product_images_product ON public.product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_inventory_movements_product ON public.inventory_movements(product_id);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory_movements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published products" ON public.products
FOR SELECT USING (publication_status = 'published');

CREATE POLICY "Public read categories" ON public.categories
FOR SELECT USING (published = true);

CREATE POLICY "Public read store settings" ON public.store_settings
FOR SELECT USING (true);

CREATE POLICY "Public insert newsletter" ON public.newsletter_subscribers
FOR INSERT WITH CHECK (true);

CREATE POLICY "Public insert enquiries" ON public.enquiries
FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated admins can manage profiles" ON public.profiles
FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated admins can manage categories" ON public.categories
FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated admins can manage products" ON public.products
FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated admins can manage product images" ON public.product_images
FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated admins can manage inventory" ON public.inventory_movements
FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated admins can manage settings" ON public.store_settings
FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated admins can manage enquiries" ON public.enquiries
FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated admins can manage newsletter" ON public.newsletter_subscribers
FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

INSERT INTO public.store_settings (
  shop_name,
  country,
  currency,
  time_zone,
  city,
  address,
  whatsapp_number,
  contact_email,
  business_phone,
  delivery_areas,
  domain,
  collection_instructions,
  opening_hours,
  announcement_bar,
  homepage_banner,
  privacy_policy,
  terms
) VALUES (
  'Goodwood',
  'South Africa',
  'ZAR',
  'Africa/Johannesburg',
  'Langlaagte, Johannesburg',
  'Johannesburg, South Africa',
  '+27846138734',
  'hello@goodwood.co.app',
  '086138734',
  'All around Johannesburg within 10km range free',
  'goodwood.co.app',
  'Collection by appointment from Johannesburg. Please contact the shop to arrange pick-up.',
  'Mon-Sat: 09:00-17:00',
  'Second-hand furniture picks, local delivery, and WhatsApp enquiries available.',
  'Find your next furniture treasure.',
  'Privacy policy for Goodwood. We collect contact details only for order and delivery enquiries and do not sell customer information.',
  'Terms for Goodwood. Product availability, delivery costs, and order acceptance remain subject to confirmation by the business.'
);

INSERT INTO public.categories (name, slug, description) VALUES
  ('Sofas and couches', 'sofas-and-couches', 'Living room seating and lounge furniture.'),
  ('Beds and bed frames', 'beds-and-bed-frames', 'Bedroom essentials and bed bases.'),
  ('Mattresses', 'mattresses', 'Single and double mattresses in good usable condition.'),
  ('Wardrobes', 'wardrobes', 'Storage furniture and bedroom cupboards.'),
  ('Dressers and bedside tables', 'dressers-and-bedside-tables', 'Compact and useful bedroom storage furniture.'),
  ('Dining tables and chairs', 'dining-tables-and-chairs', 'Dining and casual eating furniture.'),
  ('TV stands', 'tv-stands', 'TV units and media storage.'),
  ('Office desks and chairs', 'office-desks-and-chairs', 'Work-from-home and office furniture.'),
  ('Cabinets and bookshelves', 'cabinets-and-bookshelves', 'Storage furniture and display units.'),
  ('Other furniture', 'other-furniture', 'Additional second-hand furnishings and pieces.'),
  ('Clearance deals', 'clearance-deals', 'Special savings on selected pieces.');
