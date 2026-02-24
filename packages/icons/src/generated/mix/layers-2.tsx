/**
 * Auto-generated logo component: Layers 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Layers2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Layers2Logo = React.forwardRef<SVGSVGElement, Layers2LogoProps>(
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
      <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" />
  <path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" />
    </svg>
  )
);

Layers2Logo.displayName = "Layers2Logo";

export const Layers2LogoMetadata = {
  id: "layers-2",
  baseId: "layers-2",
  variant: "default",
  name: "Layers 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Layers2Logo;
