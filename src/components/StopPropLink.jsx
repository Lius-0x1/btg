"use client";

import { useRouter } from "next/navigation";

// Used only where a clickable link needs to sit INSIDE another clickable
// card, without becoming an invalid <a> inside <a>. Stops the click from
// bubbling up to the outer card's own link, then navigates itself.
export default function StopPropLink({ href, className, children }) {
  const router = useRouter();

  return (
    <span
      className={className}
      role="link"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        router.push(href);
      }}
      style={{ cursor: "pointer" }}
    >
      {children}
    </span>
  );
}