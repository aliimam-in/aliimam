/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClipboardCloseRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClipboardCloseRounded = React.forwardRef<SVGSVGElement, ClipboardCloseRoundedProps>(
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
      <path d="M14 16.16L10.04 12.2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.96 12.24L10 16.2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ClipboardCloseRounded.displayName = "ClipboardCloseRounded";
export const ClipboardCloseRoundedMetadata = { 
  id: "clipboard-close_rounded", 
  baseId: "clipboard-close", 
  variant: "rounded", 
  name: "Clipboard Close", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClipboardCloseRounded;
