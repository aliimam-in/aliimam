/**
 * Auto-generated logo component: Skip Forward (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SkipForwardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SkipForwardLogo = React.forwardRef<SVGSVGElement, SkipForwardLogoProps>(
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
      <polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>
    </svg>
  )
);

SkipForwardLogo.displayName = "SkipForwardLogo";

export const SkipForwardLogoMetadata = {
  id: "skip-forward",
  baseId: "skip-forward",
  variant: "default",
  name: "Skip Forward",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SkipForwardLogo;
