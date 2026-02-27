/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CopyrightRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CopyrightRounded = React.forwardRef<SVGSVGElement, CopyrightRoundedProps>(
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
      <path d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.88 15C14.17 15.62 13.25 16 12.24 16C10.03 16 8.23999 14.21 8.23999 12C8.23999 9.79 10.03 8 12.24 8C13.25 8 14.17 8.38 14.88 9"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CopyrightRounded.displayName = "CopyrightRounded";
export const CopyrightRoundedMetadata = { 
  id: "copyright_rounded", 
  baseId: "copyright", 
  variant: "rounded", 
  name: "Copyright", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CopyrightRounded;
