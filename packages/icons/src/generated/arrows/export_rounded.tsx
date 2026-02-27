/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ExportRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ExportRounded = React.forwardRef<SVGSVGElement, ExportRoundedProps>(
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
      <path d="M16.44 8.9C20.04 9.21 21.51 11.06 21.51 15.11V15.24C21.51 19.71 19.72 21.5 15.25 21.5H8.73998C4.26998 21.5 2.47998 19.71 2.47998 15.24V15.11C2.47998 11.09 3.92998 9.24 7.46998 8.91"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V3.62"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.3499 5.85L11.9999 2.5L8.6499 5.85"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ExportRounded.displayName = "ExportRounded";
export const ExportRoundedMetadata = { 
  id: "export_rounded", 
  baseId: "export", 
  variant: "rounded", 
  name: "Export", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ExportRounded;
