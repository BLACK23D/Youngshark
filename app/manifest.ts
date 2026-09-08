import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YoungShark Technologies",
    short_name: "YoungShark",
    description:
      "AI-native digital engineering across software, product design, cloud and data.",
    start_url: "/",
    display: "standalone",
    background_color: "#071A2F",
    theme_color: "#071A2F",
    icons: [
      {
        src: "/assets/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
