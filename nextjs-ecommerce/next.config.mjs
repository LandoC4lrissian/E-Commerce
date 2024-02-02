/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  //bu kod ile nextjs 12 ile gelen server actions özelliğini aktif hale getiriyoruz.
};

export default nextConfig;
