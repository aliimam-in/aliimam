/**
 * Auto-generated logo component: Eye Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeDollarOutlineLogo = React.forwardRef<SVGSVGElement, EyeDollarOutlineLogoProps>(
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
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M13.193 17.924c-.39 .05 -.788 .076 -1.193 .076c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.005 0 5.592 1.394 7.761 4.181" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

EyeDollarOutlineLogo.displayName = "EyeDollarOutlineLogo";

export const EyeDollarOutlineLogoMetadata = {
  id: "eye-dollar-outline",
  baseId: "eye-dollar-outline",
  variant: "default",
  name: "Eye Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeDollarOutlineLogo;
