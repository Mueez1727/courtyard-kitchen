import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7B2330",
          color: "#F6F0E6",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        CK
      </div>
    ),
    size,
  );
}
