/**
 * Auto-generated logo component: Smartphone (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixSmartphoneLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixSmartphoneLogo = React.forwardRef<SVGSVGElement, MixSmartphoneLogoProps>(
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
  <path d="M12 18h.01" />
    </svg>
  )
);

MixSmartphoneLogo.displayName = "MixSmartphoneLogo";

export const MixSmartphoneLogoMetadata = {
  id: "smartphone",
  baseId: "smartphone",
  variant: "default",
  name: "Smartphone",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixSmartphoneLogo;
