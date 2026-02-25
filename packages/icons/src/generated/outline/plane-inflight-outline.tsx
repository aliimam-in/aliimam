/**
 * Auto-generated logo component: Plane Inflight Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaneInflightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaneInflightOutlineLogo = React.forwardRef<SVGSVGElement, PlaneInflightOutlineLogoProps>(
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
      <path d="M15 11.085h5a2 2 0 1 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3l4 7" />
  <path d="M3 21h18" />
    </svg>
  )
);

PlaneInflightOutlineLogo.displayName = "PlaneInflightOutlineLogo";

export const PlaneInflightOutlineLogoMetadata = {
  id: "plane-inflight-outline",
  baseId: "plane-inflight-outline",
  variant: "default",
  name: "Plane Inflight Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaneInflightOutlineLogo;
