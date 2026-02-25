/**
 * Auto-generated logo component: Corner Left Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CornerLeftUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CornerLeftUpOutlineLogo = React.forwardRef<SVGSVGElement, CornerLeftUpOutlineLogoProps>(
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
      <path d="M18 18h-6a3 3 0 0 1 -3 -3v-10l-4 4m8 0l-4 -4" />
    </svg>
  )
);

CornerLeftUpOutlineLogo.displayName = "CornerLeftUpOutlineLogo";

export const CornerLeftUpOutlineLogoMetadata = {
  id: "corner-left-up-outline",
  baseId: "corner-left-up-outline",
  variant: "default",
  name: "Corner Left Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CornerLeftUpOutlineLogo;
