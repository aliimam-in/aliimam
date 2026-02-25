/**
 * Auto-generated logo component: Eye Closed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeClosedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeClosedOutlineLogo = React.forwardRef<SVGSVGElement, EyeClosedOutlineLogoProps>(
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
      <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
  <path d="M3 15l2.5 -3.8" />
  <path d="M21 14.976l-2.492 -3.776" />
  <path d="M9 17l.5 -4" />
  <path d="M15 17l-.5 -4" />
    </svg>
  )
);

EyeClosedOutlineLogo.displayName = "EyeClosedOutlineLogo";

export const EyeClosedOutlineLogoMetadata = {
  id: "eye-closed-outline",
  baseId: "eye-closed-outline",
  variant: "default",
  name: "Eye Closed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeClosedOutlineLogo;
