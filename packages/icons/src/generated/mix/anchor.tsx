/**
 * Auto-generated logo component: Anchor (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixAnchorLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixAnchorLogo = React.forwardRef<SVGSVGElement, MixAnchorLogoProps>(
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
      <path d="M12 6v16" />
  <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
  <path d="M9 11h6" />
  <circle cx="12" cy="4" r="2" />
    </svg>
  )
);

MixAnchorLogo.displayName = "MixAnchorLogo";

export const MixAnchorLogoMetadata = {
  id: "anchor",
  baseId: "anchor",
  variant: "default",
  name: "Anchor",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixAnchorLogo;
