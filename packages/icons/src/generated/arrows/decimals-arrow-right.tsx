/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DecimalsArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DecimalsArrowRight = React.forwardRef<SVGSVGElement, DecimalsArrowRightProps>(
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
      <path d="M10 18h10" />
  <path d="m17 21 3-3-3-3" />
  <path d="M3 11h.01" />
  <rect x="15" y="3" width="5" height="8" rx="2.5" />
  <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </svg>
  )
);
DecimalsArrowRight.displayName = "DecimalsArrowRight";
export const DecimalsArrowRightMetadata = { 
  id: "decimals-arrow-right", 
  baseId: "decimals-arrow-right", 
  variant: "default", 
  name: "Decimals Arrow Right", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DecimalsArrowRight;
