/**
 * Auto-generated logo component: Hierarchy 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Hierarchy3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Hierarchy3OutlineLogo = React.forwardRef<SVGSVGElement, Hierarchy3OutlineLogoProps>(
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
      <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M18 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M2 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 17l2 -3" />
  <path d="M9 10l2 -3" />
  <path d="M13 7l2 3" />
  <path d="M17 14l2 3" />
  <path d="M15 14l-2 3" />
  <path d="M9 14l2 3" />
    </svg>
  )
);

Hierarchy3OutlineLogo.displayName = "Hierarchy3OutlineLogo";

export const Hierarchy3OutlineLogoMetadata = {
  id: "hierarchy-3-outline",
  baseId: "hierarchy-3-outline",
  variant: "default",
  name: "Hierarchy 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Hierarchy3OutlineLogo;
