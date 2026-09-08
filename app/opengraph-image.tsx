import { ImageResponse } from "next/og";

export const alt = "YoungShark Technologies — AI-native digital engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        overflow: "hidden",
        color: "#FFFFFF",
        background:
          "radial-gradient(circle at 80% 32%, #123f48 0%, #0b2940 35%, #071A2F 72%)",
        padding: "70px",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 65,
          display: "flex",
          width: 410,
          height: 410,
          border: "2px solid rgba(24,205,177,.3)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 190,
          top: 175,
          display: "flex",
          width: 190,
          height: 190,
          border: "2px solid rgba(24,205,177,.65)",
          borderRadius: "42% 58% 50% 50%",
          transform: "rotate(42deg)",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          maxWidth: 760,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#18CDB1",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          YoungShark Technologies
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 34,
            fontSize: 76,
            fontWeight: 650,
            letterSpacing: -4,
            lineHeight: 0.98,
          }}
        >
          Technology built for what comes next.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            color: "rgba(247,251,252,.65)",
            fontSize: 23,
          }}
        >
          AI · Software · Cloud · Data
        </div>
      </div>
    </div>,
    size,
  );
}
