/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDown1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDown1Rounded = React.forwardRef<SVGSVGElement, ArrowDown1RoundedProps>(
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
      <path d="M18.0699 14.43L11.9999 20.5L5.92993 14.43" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3.5V20.33" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArrowDown1Rounded.displayName = "ArrowDown1Rounded";
export const ArrowDown1RoundedMetadata = { 
  id: "arrow-down-1_rounded", 
  baseId: "arrow-down-1", 
  variant: "rounded", 
  name: "Arrow Down 1", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowDown1Rounded;
