# Good Wood marketplace

This project is a production-oriented South African second-hand furniture marketplace built with Next.js, Tailwind, TypeScript, and Supabase.

## Features

- Responsive storefront with categories and search
- Product listing and detail pages with WhatsApp-based enquiries
- Cart with subtotal and enquiry flow
- Admin pages for products, categories, inventory, and settings
- Supabase SQL migration for inventory, products, settings, and RLS rules
- SEO, privacy, terms, contact, and delivery content

## Local setup

1. Install dependencies:
   npm install
2. Copy .env.example to .env.local and fill in your Supabase values.
3. Run the local development server:
   npm run dev
4. Open the app at http://localhost:3000.

## Database setup

1. Create a Supabase project.
2. Apply the migration in `supabase/migrations/001_initial_schema.sql`.
3. Configure the bucket name in the environment (`SUPABASE_STORAGE_BUCKET`).
4. Add an admin user with `Supabase Auth` before logging in to `/admin`.

## Deployment

- Deploy to Vercel or any compliant Next.js host.
- Set the environment variables from `.env.example` in the hosting dashboard.
- Use custom domain and HTTPS.
- Configure Supabase Storage and database backups.

## Notes

This repository uses business values supplied in the project brief. Product data is seeded for demo and local development while the business configuration is editable in the admin dashboard.
