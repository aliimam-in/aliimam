/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlaneDepartureFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlaneDepartureFilled = React.forwardRef<SVGSVGElement, PlaneDepartureFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M9.674 3.827l5.267 5.315l4.25 -1.139a3 3 0 1 1 1.572 5.79l-14.49 3.883a1 1 0 0 1 -1.006 -.303l-4.45 -5.02a1 1 0 0 1 .49 -1.629l2.896 -.776a1 1 0 0 1 .759 .1l2.091 1.207l1.217 -.326l-3.062 -5.107a1 1 0 0 1 .599 -1.48l2.898 -.777a1 1 0 0 1 .97 .262" />
  <path d="M22 21a1 1 0 0 1 -1 1h-18a1 1 0 0 1 0 -2h18a1 1 0 0 1 1 1" />
    </svg>
  )
);
PlaneDepartureFilled.displayName = "PlaneDepartureFilled";
export const PlaneDepartureFilledMetadata = { 
  id: "plane-departure_filled", 
  baseId: "plane-departure", 
  variant: "filled", 
  name: "Plane Departure", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlaneDepartureFilled;
