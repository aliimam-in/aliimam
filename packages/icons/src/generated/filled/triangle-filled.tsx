/**
 * Auto-generated logo component: Triangle Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleFilledLogo = React.forwardRef<SVGSVGElement, TriangleFilledLogoProps>(
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
      <path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" />
    </svg>
  )
);

TriangleFilledLogo.displayName = "TriangleFilledLogo";

export const TriangleFilledLogoMetadata = {
  id: "triangle-filled",
  baseId: "triangle-filled",
  variant: "default",
  name: "Triangle Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleFilledLogo;
