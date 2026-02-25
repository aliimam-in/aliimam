/**
 * Auto-generated logo component: Plane Arrival Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaneArrivalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaneArrivalOutlineLogo = React.forwardRef<SVGSVGElement, PlaneArrivalOutlineLogoProps>(
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
      <path d="M15.157 11.81l4.83 1.295a2 2 0 1 1 -1.036 3.863l-14.489 -3.882l-1.345 -6.572l2.898 .776l1.414 2.45l2.898 .776l-.12 -7.279l2.898 .777l2.052 7.797" />
  <path d="M3 21h18" />
    </svg>
  )
);

PlaneArrivalOutlineLogo.displayName = "PlaneArrivalOutlineLogo";

export const PlaneArrivalOutlineLogoMetadata = {
  id: "plane-arrival-outline",
  baseId: "plane-arrival-outline",
  variant: "default",
  name: "Plane Arrival Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaneArrivalOutlineLogo;
