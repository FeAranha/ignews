/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
}

export default nextConfig