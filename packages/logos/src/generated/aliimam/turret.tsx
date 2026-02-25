/**
 * Auto-generated logo component: Turret (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TurretProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Turret = React.forwardRef<SVGSVGElement, TurretProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 384"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#195DE6" points="208 288 192 160 224 160 240 144 240 0 192 0 192 48 160 48 160 0 96 0 96 48 64 48 64 0 16 0 16 144 32 160 64 160 48 288 16 288 0 304 0 384 256 384 256 304 240 288"></polygon>
    </g>
    </svg>
  )
);

Turret.displayName = "Turret";

export const TurretMetadata = {
  id: "turret",
  baseId: "turret",
  variant: "default",
  name: "Turret",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 384",
} as const;

export default Turret;
