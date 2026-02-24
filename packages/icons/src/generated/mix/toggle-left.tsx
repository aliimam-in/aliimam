/**
 * Auto-generated logo component: Toggle Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixToggleLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixToggleLeftLogo = React.forwardRef<SVGSVGElement, MixToggleLeftLogoProps>(
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
      <circle cx="9" cy="12" r="3" />
  <rect width="20" height="14" x="2" y="5" rx="7" />
    </svg>
  )
);

MixToggleLeftLogo.displayName = "MixToggleLeftLogo";

export const MixToggleLeftLogoMetadata = {
  id: "toggle-left",
  baseId: "toggle-left",
  variant: "default",
  name: "Toggle Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixToggleLeftLogo;
