/**
 * Auto-generated logo component: Canary Islands (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CanaryIslandsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CanaryIslands = React.forwardRef<SVGSVGElement, CanaryIslandsProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22 4H10V28H22V4Z" fill="#0868A9" />
<path d="M5 4H11V28H5C2.7923 28 1 26.2077 1 24V8C1 5.7923 2.7923 4 5 4Z" fill="white" />
<path d="M27 28H21L21 4H27C29.2077 4 31 5.7923 31 8L31 24C31 26.2077 29.2077 28 27 28Z" fill="#FFCC01" />
    </svg>
  )
);

CanaryIslands.displayName = "CanaryIslands";

export const CanaryIslandsMetadata = {
  id: "Canary-Islands",
  baseId: "Canary-Islands",
  variant: "default",
  name: "Canary Islands",
  category: "flags",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default CanaryIslands;
