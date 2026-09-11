import { ImageResponse } from "next/og";
import { restaurant } from "@/data/restaurant";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#14110F",
          color: "#F6F0E6",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 8, color: "#C4A574" }}>
          RESTAURANT IN RAWALPINDI
        </div>
        <div style={{ fontSize: 72, marginTop: 24, fontWeight: 600 }}>
          {restaurant.name}
        </div>
        <div style={{ fontSize: 32, marginTop: 16, color: "#E2D3B5" }}>
          {restaurant.tagline}
        </div>
      </div>
    ),
    size,
  );
}
