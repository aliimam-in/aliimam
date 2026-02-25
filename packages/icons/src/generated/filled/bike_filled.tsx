/**
 * Auto-generated logo component: Bike (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BikeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BikeFilledLogo = React.forwardRef<SVGSVGElement, BikeFilledLogoProps>(
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
      <path d="M5 14a4 4 0 1 1 -4 4l.005 -.2a4 4 0 0 1 3.995 -3.8" />
  <path d="M19 14a4 4 0 1 1 -4 4l.005 -.2a4 4 0 0 1 3.995 -3.8" />
  <path d="M14.832 7.445l1.703 2.555h2.465a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -.832 -.445l-1.396 -2.093l-3.275 2.62l2.21 2.21a1 1 0 0 1 .284 .577l.009 .131v4a1 1 0 0 1 -2 0v-3.585l-2.707 -2.708a1 1 0 0 1 -.01 -1.403l.092 -.085l5 -4a1 1 0 0 1 1.457 .226" />
  <path d="M17 3a2 2 0 1 1 -2 2l.005 -.15a2 2 0 0 1 1.995 -1.85" />
    </svg>
  )
);

BikeFilledLogo.displayName = "BikeFilledLogo";

export const BikeFilledLogoMetadata = {
  id: "bike_filled",
  baseId: "bike",
  variant: "filled",
  name: "Bike",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BikeFilledLogo;
