/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Strongbox2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Strongbox2Rounded = React.forwardRef<SVGSVGElement, Strongbox2RoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 19H16C18 19 19 18 19 16V8C19 6 18 5 16 5H8C6 5 5 6 5 8V16C5 18 6 19 8 19Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 9.5H7.48C8.86 9.5 9.98 10.62 9.98 12C9.98 13.38 8.86 14.5 7.48 14.5H5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 9.98999H16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 14H16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.2002 12H7.3002" stroke="#292D32" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Strongbox2Rounded.displayName = "Strongbox2Rounded";
export const Strongbox2RoundedMetadata = { 
  id: "strongbox-2_rounded", 
  baseId: "strongbox-2", 
  variant: "rounded", 
  name: "Strongbox 2", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Strongbox2Rounded;
