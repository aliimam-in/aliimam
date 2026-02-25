/**
 * Auto-generated logo component: Arrow Bear Right 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBearRight2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBearRight2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowBearRight2OutlineLogoProps>(
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
      <path d="M15 3h5v5" />
  <path d="M20 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
  <path d="M4 5l4.5 4.5" />
    </svg>
  )
);

ArrowBearRight2OutlineLogo.displayName = "ArrowBearRight2OutlineLogo";

export const ArrowBearRight2OutlineLogoMetadata = {
  id: "arrow-bear-right-2-outline",
  baseId: "arrow-bear-right-2-outline",
  variant: "default",
  name: "Arrow Bear Right 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBearRight2OutlineLogo;
