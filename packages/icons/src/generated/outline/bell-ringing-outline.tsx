/**
 * Auto-generated logo component: Bell Ringing Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellRingingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellRingingOutlineLogo = React.forwardRef<SVGSVGElement, BellRingingOutlineLogoProps>(
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
      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
  <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
    </svg>
  )
);

BellRingingOutlineLogo.displayName = "BellRingingOutlineLogo";

export const BellRingingOutlineLogoMetadata = {
  id: "bell-ringing-outline",
  baseId: "bell-ringing-outline",
  variant: "default",
  name: "Bell Ringing Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellRingingOutlineLogo;
