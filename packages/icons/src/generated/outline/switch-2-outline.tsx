/**
 * Auto-generated logo component: Switch 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Switch2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Switch2OutlineLogo = React.forwardRef<SVGSVGElement, Switch2OutlineLogoProps>(
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
      <path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" />
  <path d="M18 4l3 3l-3 3" />
  <path d="M3 7h5l7 10h6" />
  <path d="M18 20l3 -3l-3 -3" />
    </svg>
  )
);

Switch2OutlineLogo.displayName = "Switch2OutlineLogo";

export const Switch2OutlineLogoMetadata = {
  id: "switch-2-outline",
  baseId: "switch-2-outline",
  variant: "default",
  name: "Switch 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Switch2OutlineLogo;
