/**
 * Auto-generated logo component: Plant 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Plant2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Plant2OutlineLogo = React.forwardRef<SVGSVGElement, Plant2OutlineLogoProps>(
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
      <path d="M2 9a10 10 0 1 0 20 0" />
  <path d="M12 19a10 10 0 0 1 10 -10" />
  <path d="M2 9a10 10 0 0 1 10 10" />
  <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
  <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
    </svg>
  )
);

Plant2OutlineLogo.displayName = "Plant2OutlineLogo";

export const Plant2OutlineLogoMetadata = {
  id: "plant-2-outline",
  baseId: "plant-2-outline",
  variant: "default",
  name: "Plant 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Plant2OutlineLogo;
