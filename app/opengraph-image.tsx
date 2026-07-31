import { ImageResponse } from "next/og";

export const alt = "YoungShark Technologies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background:
          "linear-gradient(135deg, #ffffff 0%, #f2f7ff 48%, #effdfb 100%)",
        color: "#071a2f",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "#315bff",
          display: "flex",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: 7,
          textTransform: "uppercase",
        }}
      >
        YoungShark Technologies
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          fontWeight: 700,
          letterSpacing: -4,
          lineHeight: 1,
          marginTop: 34,
        }}
      >
        <span>Engineering the Future of</span>
        <span style={{ color: "#315bff" }}>Digital Enterprise.</span>
      </div>
      <div
        style={{
          color: "#40546d",
          display: "flex",
          fontSize: 27,
          marginTop: 34,
        }}
      >
        Android · Commerce · ERP · Quickbase · Workday
      </div>
    </div>,
    size,
  );
}
