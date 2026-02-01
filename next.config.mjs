const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/posts", destination: "/projetos", permanent: true },
    ];
  },
};

export default nextConfig;
