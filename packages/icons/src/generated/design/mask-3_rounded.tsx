/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Mask3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mask3Rounded = React.forwardRef<SVGSVGElement, Mask3RoundedProps>(
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
      <path d="M21.97 12C21.97 14.94 20.69 17.6 18.65 19.41C16.89 21.01 14.56 21.97 12 21.97C6.50003 21.97 2.03003 17.5 2.03003 12C2.03003 6.50003 6.50003 2.03003 12 2.03003C14.56 2.03003 16.89 2.99003 18.65 4.59003C20.69 6.40003 21.97 9.06003 21.97 12Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.97 16.39C11.95 18.04 10.72 18.44 9.57003 17.98C7.20003 17.03 5.53003 14.71 5.53003 12C5.53003 9.28999 7.20003 6.97 9.57003 6.01C10.72 5.55 11.95 5.95999 11.97 7.59999V16.39Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Mask3Rounded.displayName = "Mask3Rounded";
export const Mask3RoundedMetadata = { 
  id: "mask-3_rounded", 
  baseId: "mask-3", 
  variant: "rounded", 
  name: "Mask 3", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Mask3Rounded;
