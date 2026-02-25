/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DecimalsArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DecimalsArrowLeft = React.forwardRef<SVGSVGElement, DecimalsArrowLeftProps>(
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
      <path d="m13 21-3-3 3-3" />
  <path d="M20 18H10" />
  <path d="M3 11h.01" />
  <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </svg>
  )
);
DecimalsArrowLeft.displayName = "DecimalsArrowLeft";
export const DecimalsArrowLeftMetadata = { 
  id: "decimals-arrow-left", 
  baseId: "decimals-arrow-left", 
  variant: "default", 
  name: "Decimals Arrow Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DecimalsArrowLeft;
