/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBadgeDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBadgeDownFilled = React.forwardRef<SVGSVGElement, ArrowBadgeDownFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z" />
    </svg>
  )
);
ArrowBadgeDownFilled.displayName = "ArrowBadgeDownFilled";
export const ArrowBadgeDownFilledMetadata = { 
  id: "arrow-badge-down_filled", 
  baseId: "arrow-badge-down", 
  variant: "filled", 
  name: "Arrow Badge Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowBadgeDownFilled;
