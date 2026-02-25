/**
 * Auto-generated logo component: Circle Rectangle Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleRectangleFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleRectangleFilledLogo = React.forwardRef<SVGSVGElement, CircleRectangleFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m0 5.66h-10a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-4a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

CircleRectangleFilledLogo.displayName = "CircleRectangleFilledLogo";

export const CircleRectangleFilledLogoMetadata = {
  id: "circle-rectangle-filled",
  baseId: "circle-rectangle-filled",
  variant: "default",
  name: "Circle Rectangle Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleRectangleFilledLogo;
