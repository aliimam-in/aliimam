/**
 * Auto-generated logo component: Hand Metal (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HandMetalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HandMetalLogo = React.forwardRef<SVGSVGElement, HandMetalLogoProps>(
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
      <path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
  <path d="M14 11V9a2 2 0 1 0-4 0v2" />
  <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
  <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
    </svg>
  )
);

HandMetalLogo.displayName = "HandMetalLogo";

export const HandMetalLogoMetadata = {
  id: "hand-metal",
  baseId: "hand-metal",
  variant: "default",
  name: "Hand Metal",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HandMetalLogo;
