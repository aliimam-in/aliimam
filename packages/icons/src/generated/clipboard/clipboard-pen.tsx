/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardPenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardPen = React.forwardRef<SVGSVGElement, ClipboardPenProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
  <path d="M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  )
);
ClipboardPen.displayName = "ClipboardPen";
export const ClipboardPenMetadata = { 
  id: "clipboard-pen", 
  baseId: "clipboard-pen", 
  variant: "default", 
  name: "Clipboard Pen", 
  category: "clipboard", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClipboardPen;
