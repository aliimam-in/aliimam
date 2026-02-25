/**
 * Auto-generated logo component: Soup Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SoupOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SoupOffOutlineLogo = React.forwardRef<SVGSVGElement, SoupOffOutlineLogoProps>(
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
      <path d="M3 19h16" />
  <path d="M15 11h6c0 1.691 -.525 3.26 -1.42 4.552m-2.034 2.032a7.963 7.963 0 0 1 -4.546 1.416h-2a8 8 0 0 1 -8 -8h8" />
  <path d="M12 5v3" />
  <path d="M15 5v3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SoupOffOutlineLogo.displayName = "SoupOffOutlineLogo";

export const SoupOffOutlineLogoMetadata = {
  id: "soup-off-outline",
  baseId: "soup-off-outline",
  variant: "default",
  name: "Soup Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SoupOffOutlineLogo;
