import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YoungShark Technologies",
    short_name: "YoungShark",
    description:
      "Digital enterprise engineering across Android, commerce, ERP, Quickbase, and Workday.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#315bff",
    icons: [
      {
        src: "/brand/youngshark-icon-fullcolor.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
