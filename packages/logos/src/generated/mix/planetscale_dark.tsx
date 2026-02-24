/**
 * Auto-generated logo component: Planetscale (dark)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlanetscaleDarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const PlanetscaleDark = React.forwardRef<SVGSVGElement, PlanetscaleDarkProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z" />
    </svg>
  )
);

PlanetscaleDark.displayName = "PlanetscaleDark";

export const PlanetscaleDarkMetadata = {
  id: "planetscale_dark",
  baseId: "planetscale",
  variant: "dark",
  name: "Planetscale",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default PlanetscaleDark;
