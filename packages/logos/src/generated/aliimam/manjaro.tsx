/**
 * Auto-generated logo component: Manjaro (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ManjaroProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Manjaro = React.forwardRef<SVGSVGElement, ManjaroProps>(
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
      <g>
        <path d="M256,4.06799356e-06 L256,256.000004 L181.075279,256.000004 L181.075279,4.06799356e-06 L256,4.06799356e-06 Z M165.459633,90.5359552 L165.459633,256.000027 L90.5349112,256.000027 L90.5349112,90.5359552 L165.459633,90.5359552 Z M165.460901,0 L165.460901,74.9247224 L74.6704761,74.9247224 L74.6704761,256.000023 L0,256.000023 L0,0 L165.460901,0 Z" fill="#35BF5C"></path>
    </g>
    </svg>
  )
);

Manjaro.displayName = "Manjaro";

export const ManjaroMetadata = {
  id: "manjaro",
  baseId: "manjaro",
  variant: "default",
  name: "Manjaro",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Manjaro;
