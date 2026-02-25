/**
 * Auto-generated logo component: Arrows Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsLeftOutlineLogoProps>(
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
      <path d="M3 7l18 0" />
  <path d="M6 20l-3 -3l3 -3" />
  <path d="M6 4l-3 3l3 3" />
  <path d="M3 17l18 0" />
    </svg>
  )
);

ArrowsLeftOutlineLogo.displayName = "ArrowsLeftOutlineLogo";

export const ArrowsLeftOutlineLogoMetadata = {
  id: "arrows-left-outline",
  baseId: "arrows-left-outline",
  variant: "default",
  name: "Arrows Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsLeftOutlineLogo;
