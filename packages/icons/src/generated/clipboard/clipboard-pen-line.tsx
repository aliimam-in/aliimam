/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardPenLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardPenLine = React.forwardRef<SVGSVGElement, ClipboardPenLineProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="8" height="4" x="8" y="2" rx="1" />
  <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" />
  <path d="M16 4h2a2 2 0 0 1 1.73 1" />
  <path d="M8 18h1" />
  <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
    </svg>
  )
);
ClipboardPenLine.displayName = "ClipboardPenLine";
export const ClipboardPenLineMetadata = { id: "clipboard-pen-line", baseId: "clipboard-pen-line", variant: "default", name: "Clipboard Pen Line", category: "clipboard", tags: [], viewBox: "0 0 24 24" } as const;
export default ClipboardPenLine;
