/**
 * Auto-generated logo component: Shapes (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShapesLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShapesLogo = React.forwardRef<SVGSVGElement, ShapesLogoProps>(
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
      <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
  <rect x="3" y="14" width="7" height="7" rx="1" />
  <circle cx="17.5" cy="17.5" r="3.5" />
    </svg>
  )
);

ShapesLogo.displayName = "ShapesLogo";

export const ShapesLogoMetadata = {
  id: "shapes",
  baseId: "shapes",
  variant: "default",
  name: "Shapes",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShapesLogo;
