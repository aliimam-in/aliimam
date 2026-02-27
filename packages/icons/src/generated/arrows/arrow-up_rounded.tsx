/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpRounded = React.forwardRef<SVGSVGElement, ArrowUpRoundedProps>(
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
      <path d="M18.0699 9.57L11.9999 3.5L5.92993 9.57" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20.5V3.67" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowUpRounded.displayName = "ArrowUpRounded";
export const ArrowUpRoundedMetadata = { 
  id: "arrow-up_rounded", 
  baseId: "arrow-up", 
  variant: "rounded", 
  name: "Arrow Up", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUpRounded;
