/**
 * Auto-generated logo component: Globe (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixGlobeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixGlobeLogo = React.forwardRef<SVGSVGElement, MixGlobeLogoProps>(
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
  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
  <path d="M2 12h20" />
    </svg>
  )
);

MixGlobeLogo.displayName = "MixGlobeLogo";

export const MixGlobeLogoMetadata = {
  id: "globe",
  baseId: "globe",
  variant: "default",
  name: "Globe",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixGlobeLogo;
