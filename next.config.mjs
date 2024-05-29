/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nft-cdn.alchemy.com',
          },
          {
            protocol: 'https',
            hostname: 'ipfs.io',
          },
        ],
    },
};

export default nextConfig;
