/**
 * Auto-generated logo component: Minimize Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MinimizeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MinimizeOutlineLogo = React.forwardRef<SVGSVGElement, MinimizeOutlineLogoProps>(
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
      <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
  <path d="M15 5v2a2 2 0 0 0 2 2h2" />
  <path d="M5 15h2a2 2 0 0 1 2 2v2" />
  <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
    </svg>
  )
);

MinimizeOutlineLogo.displayName = "MinimizeOutlineLogo";

export const MinimizeOutlineLogoMetadata = {
  id: "minimize-outline",
  baseId: "minimize-outline",
  variant: "default",
  name: "Minimize Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MinimizeOutlineLogo;
