/**
 * Auto-generated logo component: Arrows Right Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsRightLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsRightLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsRightLeftOutlineLogoProps>(
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
      <path d="M21 7l-18 0" />
  <path d="M18 10l3 -3l-3 -3" />
  <path d="M6 20l-3 -3l3 -3" />
  <path d="M3 17l18 0" />
    </svg>
  )
);

ArrowsRightLeftOutlineLogo.displayName = "ArrowsRightLeftOutlineLogo";

export const ArrowsRightLeftOutlineLogoMetadata = {
  id: "arrows-right-left-outline",
  baseId: "arrows-right-left-outline",
  variant: "default",
  name: "Arrows Right Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsRightLeftOutlineLogo;
