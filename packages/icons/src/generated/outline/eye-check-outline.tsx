/**
 * Auto-generated logo component: Eye Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EyeCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EyeCheckOutlineLogo = React.forwardRef<SVGSVGElement, EyeCheckOutlineLogoProps>(
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
  <path d="M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

EyeCheckOutlineLogo.displayName = "EyeCheckOutlineLogo";

export const EyeCheckOutlineLogoMetadata = {
  id: "eye-check-outline",
  baseId: "eye-check-outline",
  variant: "default",
  name: "Eye Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EyeCheckOutlineLogo;
