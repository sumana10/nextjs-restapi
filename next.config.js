/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    MONGO_URI:"mongodb+srv://sumana:sumana1005@cluster0.jp2iap8.mongodb.net/nextdb?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
