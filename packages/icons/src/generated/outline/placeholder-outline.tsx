/**
 * Auto-generated logo component: Placeholder Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaceholderOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaceholderOutlineLogo = React.forwardRef<SVGSVGElement, PlaceholderOutlineLogoProps>(
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
      <path d="M10 20.415a8 8 0 1 0 3 -15.415h-3" />
  <path d="M13 8l-3 -3l3 -3" />
  <path d="M7 17l4 -4l-4 -4l-4 4l4 4" />
    </svg>
  )
);

PlaceholderOutlineLogo.displayName = "PlaceholderOutlineLogo";

export const PlaceholderOutlineLogoMetadata = {
  id: "placeholder-outline",
  baseId: "placeholder-outline",
  variant: "default",
  name: "Placeholder Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaceholderOutlineLogo;
