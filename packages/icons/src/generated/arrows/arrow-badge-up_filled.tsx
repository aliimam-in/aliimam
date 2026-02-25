/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBadgeUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBadgeUpFilled = React.forwardRef<SVGSVGElement, ArrowBadgeUpFilledProps>(
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
      <path d="M11.375 6.22l-5 4a1 1 0 0 0 -.375 .78v6l.006 .112a1 1 0 0 0 1.619 .669l4.375 -3.501l4.375 3.5a1 1 0 0 0 1.625 -.78v-6a1 1 0 0 0 -.375 -.78l-5 -4a1 1 0 0 0 -1.25 0z" />
    </svg>
  )
);
ArrowBadgeUpFilled.displayName = "ArrowBadgeUpFilled";
export const ArrowBadgeUpFilledMetadata = { 
  id: "arrow-badge-up_filled", 
  baseId: "arrow-badge-up", 
  variant: "filled", 
  name: "Arrow Badge Up", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowBadgeUpFilled;
