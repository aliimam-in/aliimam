/**
 * Auto-generated logo component: Background Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BackgroundOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BackgroundOutlineLogo = React.forwardRef<SVGSVGElement, BackgroundOutlineLogoProps>(
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
      <path d="M4 8l4 -4" />
  <path d="M14 4l-10 10" />
  <path d="M4 20l16 -16" />
  <path d="M20 10l-10 10" />
  <path d="M20 16l-4 4" />
    </svg>
  )
);

BackgroundOutlineLogo.displayName = "BackgroundOutlineLogo";

export const BackgroundOutlineLogoMetadata = {
  id: "background-outline",
  baseId: "background-outline",
  variant: "default",
  name: "Background Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BackgroundOutlineLogo;
