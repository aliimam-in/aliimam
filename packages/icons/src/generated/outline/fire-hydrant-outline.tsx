/**
 * Auto-generated logo component: Fire Hydrant Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FireHydrantOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FireHydrantOutlineLogo = React.forwardRef<SVGSVGElement, FireHydrantOutlineLogoProps>(
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
      <path d="M5 21h14" />
  <path d="M17 21v-5h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -10 0v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5" />
  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6 8h12" />
    </svg>
  )
);

FireHydrantOutlineLogo.displayName = "FireHydrantOutlineLogo";

export const FireHydrantOutlineLogoMetadata = {
  id: "fire-hydrant-outline",
  baseId: "fire-hydrant-outline",
  variant: "default",
  name: "Fire Hydrant Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FireHydrantOutlineLogo;
