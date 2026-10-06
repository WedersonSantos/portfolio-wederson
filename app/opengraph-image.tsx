import { ImageResponse } from "next/og";
export const alt = "Wederson Ferreira — Back-end, Automação e Dados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "76px", width: "100%", height: "100%", background: "#080a0f", color: "#f5f7fa", fontFamily: "sans-serif" }}><div style={{ display: "flex", fontSize: 24, color: "#a7b0be", marginBottom: 38 }}>WEDERSON FERREIRA</div><div style={{ display: "flex", flexDirection: "column", fontSize: 74, fontWeight: 700, lineHeight: 1.08 }}><span>BACK-END.</span><span>AUTOMAÇÃO.</span><span style={{ color: "#70a7ff" }}>DADOS.</span></div><div style={{ display: "flex", fontSize: 24, color: "#a7b0be", marginTop: 38 }}>Python / PHP / SQL / APIs REST</div></div>, size);
}
