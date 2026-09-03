import { ImageResponse } from "next/og";

export const alt = "Sixth Project — Product Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "#050505",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "70px 78px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid #ff621f",
          borderRadius: 999,
          color: "#ff621f",
          display: "flex",
          fontSize: 24,
          letterSpacing: "0.18em",
          padding: "12px 22px",
          textTransform: "uppercase",
        }}
      >
        Product Engineer · Japan
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            maxWidth: 1000,
          }}
        >
          Think in products. Build in code.
        </div>
        <div
          style={{
            color: "#a8a8ad",
            display: "flex",
            fontSize: 28,
            marginTop: 32,
          }}
        >
          Discover · Design · Build · Operate
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          fontSize: 30,
          fontWeight: 600,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>Sixth Project.</span>
        <span style={{ color: "#ff621f" }}>JPY 8.4M annual impact</span>
      </div>
    </div>,
    size,
  );
}
