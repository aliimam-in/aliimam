/**
 * Auto-generated logo component: Hierarchy 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Hierarchy2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Hierarchy2OutlineLogo = React.forwardRef<SVGSVGElement, Hierarchy2OutlineLogoProps>(
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
      <path d="M10 3h4v4h-4l0 -4" />
  <path d="M3 17h4v4h-4l0 -4" />
  <path d="M17 17h4v4h-4l0 -4" />
  <path d="M7 17l5 -4l5 4" />
  <path d="M12 7l0 6" />
    </svg>
  )
);

Hierarchy2OutlineLogo.displayName = "Hierarchy2OutlineLogo";

export const Hierarchy2OutlineLogoMetadata = {
  id: "hierarchy-2-outline",
  baseId: "hierarchy-2-outline",
  variant: "default",
  name: "Hierarchy 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Hierarchy2OutlineLogo;
