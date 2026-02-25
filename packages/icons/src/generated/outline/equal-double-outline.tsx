/**
 * Auto-generated logo component: Equal Double Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EqualDoubleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EqualDoubleOutlineLogo = React.forwardRef<SVGSVGElement, EqualDoubleOutlineLogoProps>(
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
      <path d="M3 10h7" />
  <path d="M3 14h7" />
  <path d="M14 10h7" />
  <path d="M14 14h7" />
    </svg>
  )
);

EqualDoubleOutlineLogo.displayName = "EqualDoubleOutlineLogo";

export const EqualDoubleOutlineLogoMetadata = {
  id: "equal-double-outline",
  baseId: "equal-double-outline",
  variant: "default",
  name: "Equal Double Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EqualDoubleOutlineLogo;
