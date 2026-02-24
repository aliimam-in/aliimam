/**
 * Auto-generated logo component: Fast Forward (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FastForwardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FastForwardLogo = React.forwardRef<SVGSVGElement, FastForwardLogoProps>(
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
      <polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/>
    </svg>
  )
);

FastForwardLogo.displayName = "FastForwardLogo";

export const FastForwardLogoMetadata = {
  id: "fast-forward",
  baseId: "fast-forward",
  variant: "default",
  name: "Fast Forward",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FastForwardLogo;
