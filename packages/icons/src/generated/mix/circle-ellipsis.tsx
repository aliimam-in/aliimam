/**
 * Auto-generated logo component: Circle Ellipsis (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleEllipsisLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleEllipsisLogo = React.forwardRef<SVGSVGElement, CircleEllipsisLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M17 12h.01" />
  <path d="M12 12h.01" />
  <path d="M7 12h.01" />
    </svg>
  )
);

CircleEllipsisLogo.displayName = "CircleEllipsisLogo";

export const CircleEllipsisLogoMetadata = {
  id: "circle-ellipsis",
  baseId: "circle-ellipsis",
  variant: "default",
  name: "Circle Ellipsis",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleEllipsisLogo;
