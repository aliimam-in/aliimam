/**
 * Auto-generated logo component: Air Conditioning Disabled Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AirConditioningDisabledOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AirConditioningDisabledOutlineLogo = React.forwardRef<SVGSVGElement, AirConditioningDisabledOutlineLogoProps>(
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
      <path d="M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4" />
  <path d="M7 16v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
    </svg>
  )
);

AirConditioningDisabledOutlineLogo.displayName = "AirConditioningDisabledOutlineLogo";

export const AirConditioningDisabledOutlineLogoMetadata = {
  id: "air-conditioning-disabled-outline",
  baseId: "air-conditioning-disabled-outline",
  variant: "default",
  name: "Air Conditioning Disabled Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AirConditioningDisabledOutlineLogo;
