/**
 * Auto-generated logo component: Triangle Inverted (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleInvertedFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleInvertedFilledLogo = React.forwardRef<SVGSVGElement, TriangleInvertedFilledLogoProps>(
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
      <path d="M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z" />
    </svg>
  )
);

TriangleInvertedFilledLogo.displayName = "TriangleInvertedFilledLogo";

export const TriangleInvertedFilledLogoMetadata = {
  id: "triangle-inverted_filled",
  baseId: "triangle-inverted",
  variant: "filled",
  name: "Triangle Inverted",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleInvertedFilledLogo;
