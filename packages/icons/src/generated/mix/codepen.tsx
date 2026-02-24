/**
 * Auto-generated logo component: Codepen (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCodepenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCodepenLogo = React.forwardRef<SVGSVGElement, MixCodepenLogoProps>(
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
  <line x1="12" x2="12" y1="22" y2="15.5" />
  <polyline points="22 8.5 12 15.5 2 8.5" />
  <polyline points="2 15.5 12 8.5 22 15.5" />
  <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
);

MixCodepenLogo.displayName = "MixCodepenLogo";

export const MixCodepenLogoMetadata = {
  id: "codepen",
  baseId: "codepen",
  variant: "default",
  name: "Codepen",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCodepenLogo;
