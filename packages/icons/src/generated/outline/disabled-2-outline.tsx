/**
 * Auto-generated logo component: Disabled 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Disabled2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Disabled2OutlineLogo = React.forwardRef<SVGSVGElement, Disabled2OutlineLogoProps>(
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
      <path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M9 11a5 5 0 1 0 3.95 7.95" />
  <path d="M19 20l-4 -5h-4l3 -5l-4 -3l-4 1" />
    </svg>
  )
);

Disabled2OutlineLogo.displayName = "Disabled2OutlineLogo";

export const Disabled2OutlineLogoMetadata = {
  id: "disabled-2-outline",
  baseId: "disabled-2-outline",
  variant: "default",
  name: "Disabled 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Disabled2OutlineLogo;
