/**
 * Auto-generated logo component: Arrows Up Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsUpLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsUpLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsUpLeftOutlineLogoProps>(
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
      <path d="M21 7l-4 -4l-4 4" />
  <path d="M17 3v11a3 3 0 0 1 -3 3h-11" />
  <path d="M7 13l-4 4l4 4" />
    </svg>
  )
);

ArrowsUpLeftOutlineLogo.displayName = "ArrowsUpLeftOutlineLogo";

export const ArrowsUpLeftOutlineLogoMetadata = {
  id: "arrows-up-left-outline",
  baseId: "arrows-up-left-outline",
  variant: "default",
  name: "Arrows Up Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsUpLeftOutlineLogo;
