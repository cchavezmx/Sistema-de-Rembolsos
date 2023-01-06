/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'tesoreria.intecsa.com.mx', 'lexica-serve-encoded-images2.sharif.workers.dev', 'randomuser.me']
  }
}

module.exports = nextConfig
