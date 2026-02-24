/**
 * Auto-generated logo component: Settings (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixSettingsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixSettingsLogo = React.forwardRef<SVGSVGElement, MixSettingsLogoProps>(
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
      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />
    </svg>
  )
);

MixSettingsLogo.displayName = "MixSettingsLogo";

export const MixSettingsLogoMetadata = {
  id: "settings",
  baseId: "settings",
  variant: "default",
  name: "Settings",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixSettingsLogo;
