/**
 * Auto-generated logo component: Swiss Franc (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SwissFrancLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SwissFrancLogo = React.forwardRef<SVGSVGElement, SwissFrancLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10 21V3h8" />
  <path d="M6 16h9" />
  <path d="M10 9.5h7" />
    </svg>
  )
);

SwissFrancLogo.displayName = "SwissFrancLogo";

export const SwissFrancLogoMetadata = {
  id: "swiss-franc",
  baseId: "swiss-franc",
  variant: "default",
  name: "Swiss Franc",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SwissFrancLogo;
