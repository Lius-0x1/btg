/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/builders/akorede.html", destination: "/builders/akorede", permanent: true },
      { source: "/builders/ajibi.html", destination: "/builders/ajibi", permanent: true },
      { source: "/builders/alabi.html", destination: "/builders/alabi", permanent: true },
      { source: "/builders/awoleye.html", destination: "/builders/awoleye", permanent: true },
      { source: "/builders/doobee.html", destination: "/builders/doobee", permanent: true },
      { source: "/builders/grace.html", destination: "/builders/grace", permanent: true },
      { source: "/builders/ilias.html", destination: "/builders/ilias", permanent: true },
      { source: "/builders/jimoh.html", destination: "/builders/jimoh", permanent: true },
      { source: "/builders/johnson.html", destination: "/builders/johnson", permanent: true },
      { source: "/builders/olayemi.html", destination: "/builders/olayemi", permanent: true },
      { source: "/builders/rejoice.html", destination: "/builders/rejoice", permanent: true },
      { source: "/builders/sodiq.html", destination: "/builders/sodiq", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;