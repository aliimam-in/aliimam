/**
 * Auto-generated logo component: Bath (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BathLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BathLogo = React.forwardRef<SVGSVGElement, BathLogoProps>(
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
      <path d="M10 4 8 6" />
  <path d="M17 19v2" />
  <path d="M2 12h20" />
  <path d="M7 19v2" />
  <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
    </svg>
  )
);

BathLogo.displayName = "BathLogo";

export const BathLogoMetadata = {
  id: "bath",
  baseId: "bath",
  variant: "default",
  name: "Bath",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BathLogo;
