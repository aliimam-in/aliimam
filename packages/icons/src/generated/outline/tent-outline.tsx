/**
 * Auto-generated logo component: Tent Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TentOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TentOutlineLogo = React.forwardRef<SVGSVGElement, TentOutlineLogoProps>(
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
      <path d="M11 14l4 6h6l-9 -16l-9 16h6l4 -6" />
    </svg>
  )
);

TentOutlineLogo.displayName = "TentOutlineLogo";

export const TentOutlineLogoMetadata = {
  id: "tent-outline",
  baseId: "tent-outline",
  variant: "default",
  name: "Tent Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TentOutlineLogo;
