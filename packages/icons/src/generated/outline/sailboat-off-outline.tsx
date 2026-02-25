/**
 * Auto-generated logo component: Sailboat Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SailboatOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SailboatOffOutlineLogo = React.forwardRef<SVGSVGElement, SailboatOffOutlineLogoProps>(
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
      <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" />
  <path d="M4 18l-1 -3h12m4 0h2l-.506 1.517" />
  <path d="M11 11v1h1m4 0h2l-7 -9v4" />
  <path d="M7.713 7.718l-1.713 4.282" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SailboatOffOutlineLogo.displayName = "SailboatOffOutlineLogo";

export const SailboatOffOutlineLogoMetadata = {
  id: "sailboat-off-outline",
  baseId: "sailboat-off-outline",
  variant: "default",
  name: "Sailboat Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SailboatOffOutlineLogo;
