/**
 * Auto-generated logo component: Arrow Right To Line (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightToLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightToLineLogo = React.forwardRef<SVGSVGElement, ArrowRightToLineLogoProps>(
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
      <path d="M17 12H3" />
  <path d="m11 18 6-6-6-6" />
  <path d="M21 5v14" />
    </svg>
  )
);

ArrowRightToLineLogo.displayName = "ArrowRightToLineLogo";

export const ArrowRightToLineLogoMetadata = {
  id: "arrow-right-to-line",
  baseId: "arrow-right-to-line",
  variant: "default",
  name: "Arrow Right To Line",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightToLineLogo;
