/**
 * Auto-generated logo component: Switch 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Switch3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Switch3OutlineLogo = React.forwardRef<SVGSVGElement, Switch3OutlineLogoProps>(
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
      <path d="M3 17h2.397a5 5 0 0 0 4.096 -2.133l.177 -.253m3.66 -5.227l.177 -.254a5 5 0 0 1 4.096 -2.133h3.397" />
  <path d="M18 4l3 3l-3 3" />
  <path d="M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397" />
  <path d="M18 20l3 -3l-3 -3" />
    </svg>
  )
);

Switch3OutlineLogo.displayName = "Switch3OutlineLogo";

export const Switch3OutlineLogoMetadata = {
  id: "switch-3-outline",
  baseId: "switch-3-outline",
  variant: "default",
  name: "Switch 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Switch3OutlineLogo;
