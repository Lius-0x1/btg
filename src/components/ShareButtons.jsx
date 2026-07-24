"use client";
import { useState } from "react";

export default function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => (typeof window !== "undefined" ? window.location.href : "");

  const shareWhatsApp = () => {
    const url = getUrl();
    window.open(`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`, "_blank");
  };

  const shareTwitter = () => {
    const url = getUrl();
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, "_blank");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(getUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: "flex", gap: ".7rem", alignItems: "center", flexWrap: "wrap" }}>
      <span style={{ fontSize: ".73rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Share:</span>
      <span onClick={shareWhatsApp} className="link-pill" style={{ cursor: "pointer" }}>WhatsApp</span> ||
      <span onClick={shareTwitter} className="link-pill" style={{ cursor: "pointer" }}>X / Twitter</span> ||
      <span onClick={copyLink} className="link-pill" style={{ cursor: "pointer" }}>{copied ? "Copied!" : "Copy Link"}</span>
    </div>
  );
}