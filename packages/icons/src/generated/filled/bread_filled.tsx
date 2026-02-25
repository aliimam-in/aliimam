/**
 * Auto-generated logo component: Bread (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BreadFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BreadFilledLogo = React.forwardRef<SVGSVGElement, BreadFilledLogoProps>(
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
      <path d="M18 3a4 4 0 0 1 3.109 6.516l-.11 .126l.001 8.358a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -3 -3v-8.356l-.116 -.136a4 4 0 0 1 -.728 -3.616l.067 -.21c.532 -1.525 1.93 -2.58 3.601 -2.677l12.079 .001z" />
    </svg>
  )
);

BreadFilledLogo.displayName = "BreadFilledLogo";

export const BreadFilledLogoMetadata = {
  id: "bread_filled",
  baseId: "bread",
  variant: "filled",
  name: "Bread",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BreadFilledLogo;
