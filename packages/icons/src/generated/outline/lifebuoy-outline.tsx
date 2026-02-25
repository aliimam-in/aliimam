/**
 * Auto-generated logo component: Lifebuoy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LifebuoyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LifebuoyOutlineLogo = React.forwardRef<SVGSVGElement, LifebuoyOutlineLogoProps>(
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
      <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M15 15l3.35 3.35" />
  <path d="M9 15l-3.35 3.35" />
  <path d="M5.65 5.65l3.35 3.35" />
  <path d="M18.35 5.65l-3.35 3.35" />
    </svg>
  )
);

LifebuoyOutlineLogo.displayName = "LifebuoyOutlineLogo";

export const LifebuoyOutlineLogoMetadata = {
  id: "lifebuoy-outline",
  baseId: "lifebuoy-outline",
  variant: "default",
  name: "Lifebuoy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LifebuoyOutlineLogo;
