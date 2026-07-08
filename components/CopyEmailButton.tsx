"use client";

import { profile } from "@/data";
import { useEffect, useState } from "react";

interface CopyEmailButtonProps {
  className?: string;
  variant?: "primary" | "ghost" | "inline";
}

const CopyEmailButton = ({
  className = "",
  variant = "inline",
}: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Clipboard unavailable
    }
  };

  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "ghost"
        ? "btn-ghost"
        : "font-mono text-xs text-paper-muted hover:text-signal transition-colors";

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`${variantClass} ${className}`}
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
};

export default CopyEmailButton;
