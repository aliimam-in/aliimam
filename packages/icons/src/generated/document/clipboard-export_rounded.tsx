/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardExportRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardExportRounded = React.forwardRef<SVGSVGElement, ClipboardExportRoundedProps>(
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
      <path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V15"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 19V16H18"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 22L15.04 16.04"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ClipboardExportRounded.displayName = "ClipboardExportRounded";
export const ClipboardExportRoundedMetadata = { 
  id: "clipboard-export_rounded", 
  baseId: "clipboard-export", 
  variant: "rounded", 
  name: "Clipboard Export", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClipboardExportRounded;
