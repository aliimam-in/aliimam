/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardPasteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardPaste = React.forwardRef<SVGSVGElement, ClipboardPasteProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 14h10" />
  <path d="M16 4h2a2 2 0 0 1 2 2v1.344" />
  <path d="m17 18 4-4-4-4" />
  <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" />
  <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  )
);
ClipboardPaste.displayName = "ClipboardPaste";
export const ClipboardPasteMetadata = { id: "clipboard-paste", baseId: "clipboard-paste", variant: "default", name: "Clipboard Paste", category: "clipboard", tags: [], viewBox: "0 0 24 24" } as const;
export default ClipboardPaste;
