/**
 * Auto-generated logo component: Framer (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FramerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FramerLogo = React.forwardRef<SVGSVGElement, FramerLogoProps>(
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
      <path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
    </svg>
  )
);

FramerLogo.displayName = "FramerLogo";

export const FramerLogoMetadata = {
  id: "framer",
  baseId: "framer",
  variant: "default",
  name: "Framer",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FramerLogo;
