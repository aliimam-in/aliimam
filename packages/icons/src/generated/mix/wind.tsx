/**
 * Auto-generated logo component: Wind (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixWindLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixWindLogo = React.forwardRef<SVGSVGElement, MixWindLogoProps>(
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
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
  <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
  <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    </svg>
  )
);

MixWindLogo.displayName = "MixWindLogo";

export const MixWindLogoMetadata = {
  id: "wind",
  baseId: "wind",
  variant: "default",
  name: "Wind",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixWindLogo;
