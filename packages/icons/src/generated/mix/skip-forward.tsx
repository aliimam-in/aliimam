/**
 * Auto-generated logo component: Skip Forward (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixSkipForwardLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixSkipForwardLogo = React.forwardRef<SVGSVGElement, MixSkipForwardLogoProps>(
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
      <path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
    </svg>
  )
);

MixSkipForwardLogo.displayName = "MixSkipForwardLogo";

export const MixSkipForwardLogoMetadata = {
  id: "skip-forward",
  baseId: "skip-forward",
  variant: "default",
  name: "Skip Forward",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixSkipForwardLogo;
