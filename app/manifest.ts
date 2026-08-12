import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YoungShark Technologies",
    short_name: "YoungShark",
    description:
      "AI-native digital engineering across software, product design, cloud and data.",
    start_url: "/",
    display: "standalone",
    background_color: "#06111e",
    theme_color: "#06111e",
    icons: [
      {
        src: "/brand/youngshark-icon-fullcolor.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
