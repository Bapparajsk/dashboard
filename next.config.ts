import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wallpapercave.com",
                port: "",
                pathname: "/wp/wp2533091.jpg",
            },
        ],
        domains: ["heroui.com", "deep-image.ai"]
    }
};

export default nextConfig;
