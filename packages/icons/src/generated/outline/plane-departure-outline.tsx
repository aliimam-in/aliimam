/**
 * Auto-generated logo component: Plane Departure Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlaneDepartureOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlaneDepartureOutlineLogo = React.forwardRef<SVGSVGElement, PlaneDepartureOutlineLogoProps>(
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
      <path d="M14.639 10.258l4.83 -1.294a2 2 0 1 1 1.035 3.863l-14.489 3.883l-4.45 -5.02l2.897 -.776l2.45 1.414l2.897 -.776l-3.743 -6.244l2.898 -.777l5.675 5.727" />
  <path d="M3 21h18" />
    </svg>
  )
);

PlaneDepartureOutlineLogo.displayName = "PlaneDepartureOutlineLogo";

export const PlaneDepartureOutlineLogoMetadata = {
  id: "plane-departure-outline",
  baseId: "plane-departure-outline",
  variant: "default",
  name: "Plane Departure Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlaneDepartureOutlineLogo;
