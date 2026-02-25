/**
 * Auto-generated logo component: Heading Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeadingOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeadingOffOutlineLogo = React.forwardRef<SVGSVGElement, HeadingOffOutlineLogoProps>(
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
      <path d="M7 12h5m4 0h1" />
  <path d="M7 7v12" />
  <path d="M17 5v8m0 4v2" />
  <path d="M15 19h4" />
  <path d="M15 5h4" />
  <path d="M5 19h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HeadingOffOutlineLogo.displayName = "HeadingOffOutlineLogo";

export const HeadingOffOutlineLogoMetadata = {
  id: "heading-off-outline",
  baseId: "heading-off-outline",
  variant: "default",
  name: "Heading Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeadingOffOutlineLogo;
