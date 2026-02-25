/**
 * Auto-generated logo component: Arrow Bear Left 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBearLeft2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBearLeft2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowBearLeft2OutlineLogoProps>(
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
      <path d="M9 3h-5v5" />
  <path d="M4 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" />
  <path d="M20 5l-4.5 4.5" />
    </svg>
  )
);

ArrowBearLeft2OutlineLogo.displayName = "ArrowBearLeft2OutlineLogo";

export const ArrowBearLeft2OutlineLogoMetadata = {
  id: "arrow-bear-left-2-outline",
  baseId: "arrow-bear-left-2-outline",
  variant: "default",
  name: "Arrow Bear Left 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBearLeft2OutlineLogo;
