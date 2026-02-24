/**
 * Auto-generated logo component: Meh (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixMehLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixMehLogo = React.forwardRef<SVGSVGElement, MixMehLogoProps>(
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
  <line x1="8" x2="16" y1="15" y2="15" />
  <line x1="9" x2="9.01" y1="9" y2="9" />
  <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
);

MixMehLogo.displayName = "MixMehLogo";

export const MixMehLogoMetadata = {
  id: "meh",
  baseId: "meh",
  variant: "default",
  name: "Meh",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixMehLogo;
