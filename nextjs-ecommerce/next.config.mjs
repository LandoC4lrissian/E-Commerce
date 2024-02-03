/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "image.unsplash.com"}],
    },/*remotePatterns  uygulamanızda hangi uzaktan URL'lerden gelen görsellerin optimize edileceğini ve işleneceğini belirlemenizi sağlar.
    Bu sayede, Next.js'in Görüntü Optimizasyonu API'sini kullanarak performansı ve kullanıcı deneyimini iyileştirebilirsiniz.*/
  experimental: {
    serverActions: true,
  },
  //bu kod ile nextjs 12 ile gelen server actions özelliğini aktif hale getiriyoruz.
};

export default nextConfig;
