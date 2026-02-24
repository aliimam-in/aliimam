/**
 * Auto-generated logo component: Fast Forward (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixFastForwardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixFastForwardLogo = React.forwardRef<SVGSVGElement, MixFastForwardLogoProps>(
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
      <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />
    </svg>
  )
);

MixFastForwardLogo.displayName = "MixFastForwardLogo";

export const MixFastForwardLogoMetadata = {
  id: "fast-forward",
  baseId: "fast-forward",
  variant: "default",
  name: "Fast Forward",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixFastForwardLogo;
