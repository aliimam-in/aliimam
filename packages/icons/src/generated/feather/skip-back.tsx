/**
 * Auto-generated logo component: Skip Back (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SkipBackLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SkipBackLogo = React.forwardRef<SVGSVGElement, SkipBackLogoProps>(
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
      <polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>
    </svg>
  )
);

SkipBackLogo.displayName = "SkipBackLogo";

export const SkipBackLogoMetadata = {
  id: "skip-back",
  baseId: "skip-back",
  variant: "default",
  name: "Skip Back",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SkipBackLogo;
