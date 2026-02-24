/**
 * Auto-generated logo component: Layers (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayersLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayersLogo = React.forwardRef<SVGSVGElement, LayersLogoProps>(
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
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  )
);

LayersLogo.displayName = "LayersLogo";

export const LayersLogoMetadata = {
  id: "layers",
  baseId: "layers",
  variant: "default",
  name: "Layers",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayersLogo;
