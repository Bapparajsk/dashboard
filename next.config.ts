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
        domains: ["www.powertrafic.fr", "heroui.com"]
    }
};

export default nextConfig;
