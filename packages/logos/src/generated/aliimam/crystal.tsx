/**
 * Auto-generated logo component: Crystal (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrystalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Crystal = React.forwardRef<SVGSVGElement, CrystalProps>(
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
        <path d="M93.365,0 L0,93.741 L34.258,222.117 L163.011,256 L256,161.882 L222.117,35.388 L93.365,0 Z M6.776,95.247 L131.764,62.493 L97.506,187.105 L6.776,95.247 Z" fill="#000000"></path>
    </g>
    </svg>
  )
);

Crystal.displayName = "Crystal";

export const CrystalMetadata = {
  id: "crystal",
  baseId: "crystal",
  variant: "default",
  name: "Crystal",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Crystal;
