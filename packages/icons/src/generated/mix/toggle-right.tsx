/**
 * Auto-generated logo component: Toggle Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixToggleRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixToggleRightLogo = React.forwardRef<SVGSVGElement, MixToggleRightLogoProps>(
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
      <circle cx="15" cy="12" r="3" />
  <rect width="20" height="14" x="2" y="5" rx="7" />
    </svg>
  )
);

MixToggleRightLogo.displayName = "MixToggleRightLogo";

export const MixToggleRightLogoMetadata = {
  id: "toggle-right",
  baseId: "toggle-right",
  variant: "default",
  name: "Toggle Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixToggleRightLogo;
