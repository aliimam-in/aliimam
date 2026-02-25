/**
 * Auto-generated logo component: Disc (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiscLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiscLogo = React.forwardRef<SVGSVGElement, DiscLogoProps>(
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
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);

DiscLogo.displayName = "DiscLogo";

export const DiscLogoMetadata = {
  id: "disc",
  baseId: "disc",
  variant: "default",
  name: "Disc",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiscLogo;
