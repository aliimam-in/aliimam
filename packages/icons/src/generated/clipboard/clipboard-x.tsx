/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardX = React.forwardRef<SVGSVGElement, ClipboardXProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <path d="m15 11-6 6" />
  <path d="m9 11 6 6" />
    </svg>
  )
);
ClipboardX.displayName = "ClipboardX";
export const ClipboardXMetadata = { id: "clipboard-x", baseId: "clipboard-x", variant: "default", name: "Clipboard X", category: "clipboard", tags: [], viewBox: "0 0 24 24" } as const;
export default ClipboardX;
