import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RainbowSmoke";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          backgroundColor: "#0903A6",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -1,
            display: "flex",
          }}
        >
          RAINBOWSMOKE
        </div>
        <div style={{ fontSize: 32, color: "#F2F2F2", display: "flex" }}>
          Built for creators. Powered by community.
        </div>
      </div>
    ),
    { ...size },
  );
}
