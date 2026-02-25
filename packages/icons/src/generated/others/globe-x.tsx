/**
 * Auto-generated logo component: Globe X (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlobeXLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlobeXLogo = React.forwardRef<SVGSVGElement, GlobeXLogoProps>(
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
      <path d="m16 3 5 5" />
  <path d="M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" />
  <path d="m21 3-5 5" />
    </svg>
  )
);

GlobeXLogo.displayName = "GlobeXLogo";

export const GlobeXLogoMetadata = {
  id: "globe-x",
  baseId: "globe-x",
  variant: "default",
  name: "Globe X",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlobeXLogo;
