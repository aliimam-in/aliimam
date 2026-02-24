/**
 * Auto-generated logo component: Smile (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixSmileLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixSmileLogo = React.forwardRef<SVGSVGElement, MixSmileLogoProps>(
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
  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
  <line x1="9" x2="9.01" y1="9" y2="9" />
  <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
);

MixSmileLogo.displayName = "MixSmileLogo";

export const MixSmileLogoMetadata = {
  id: "smile",
  baseId: "smile",
  variant: "default",
  name: "Smile",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixSmileLogo;
