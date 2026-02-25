/**
 * Auto-generated logo component: Crateio (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrateioProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Crateio = React.forwardRef<SVGSVGElement, CrateioProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 192"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#009DC7" points="192 64 192 0 128 0 128 64 -3.55271368e-14 64 -3.55271368e-14 128 63.9999218 128 63.9999218 192 128 192 128 128 256 128 256 64"></polygon>
    </g>
    </svg>
  )
);

Crateio.displayName = "Crateio";

export const CrateioMetadata = {
  id: "crateio",
  baseId: "crateio",
  variant: "default",
  name: "Crateio",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 192",
} as const;

export default Crateio;
