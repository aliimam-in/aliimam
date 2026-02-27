/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CrownRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CrownRounded = React.forwardRef<SVGSVGElement, CrownRoundedProps>(
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
      <path d="M2 15.29V5.71C2 4.38 2.77 4.06 3.71 5L6.3 7.59C6.69 7.98 7.33 7.98 7.71 7.59L11.29 4C11.68 3.61 12.32 3.61 12.7 4L16.29 7.59C16.68 7.98 17.32 7.98 17.7 7.59L20.29 5C21.23 4.06 22 4.38 22 5.71V15.3C22 18.3 20 20.3 17 20.3H7C4.24 20.29 2 18.05 2 15.29Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CrownRounded.displayName = "CrownRounded";
export const CrownRoundedMetadata = { 
  id: "crown_rounded", 
  baseId: "crown", 
  variant: "rounded", 
  name: "Crown", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CrownRounded;
