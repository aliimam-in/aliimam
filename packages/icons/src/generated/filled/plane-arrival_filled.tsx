/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlaneArrivalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PlaneArrivalFilled = React.forwardRef<SVGSVGElement, PlaneArrivalFilledProps>(
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
      <path d="M10.466 2.271l2.898 .777a1 1 0 0 1 .708 .711l1.904 7.235l4.255 1.141a3 3 0 1 1 -1.539 5.799l-14.489 -3.882a1 1 0 0 1 -.72 -.765l-1.347 -6.572a1 1 0 0 1 1.239 -1.167l2.898 .776a1 1 0 0 1 .607 .466l1.207 2.091l1.217 .326l-.098 -5.954a1 1 0 0 1 1.259 -.982" />
  <path d="M22 21a1 1 0 0 1 -1 1h-18a1 1 0 0 1 0 -2h18a1 1 0 0 1 1 1" />
    </svg>
  )
);
PlaneArrivalFilled.displayName = "PlaneArrivalFilled";
export const PlaneArrivalFilledMetadata = { 
  id: "plane-arrival_filled", 
  baseId: "plane-arrival", 
  variant: "filled", 
  name: "Plane Arrival", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PlaneArrivalFilled;
