/**
 * Auto-generated logo component: Air Conditioning Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AirConditioningOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AirConditioningOutlineLogo = React.forwardRef<SVGSVGElement, AirConditioningOutlineLogoProps>(
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
      <path d="M8 16a3 3 0 0 1 -3 3" />
  <path d="M16 16a3 3 0 0 0 3 3" />
  <path d="M12 16v4" />
  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4" />
  <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
    </svg>
  )
);

AirConditioningOutlineLogo.displayName = "AirConditioningOutlineLogo";

export const AirConditioningOutlineLogoMetadata = {
  id: "air-conditioning-outline",
  baseId: "air-conditioning-outline",
  variant: "default",
  name: "Air Conditioning Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AirConditioningOutlineLogo;
