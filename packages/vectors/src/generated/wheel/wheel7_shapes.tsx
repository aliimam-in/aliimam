
'use client';
import React from 'react';

export interface Wheel7ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Wheel7Shapes = React.forwardRef<SVGSVGElement, Wheel7ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M10.2105 24V13.9359L1.10674 17.0461L0 13.4646L9.10324 10.3545L3.47745 2.21259L6.37371 0L12 8.1426L17.6263 1.08349e-05L20.5225 2.2126L14.8967 10.3545L24 13.4646L22.8933 17.0462L13.7895 13.9359V24H10.2105Z" fill="currentColor"/>
    </svg>
  )
);

Wheel7Shapes.displayName = "Wheel7Shapes";

export const Wheel7ShapesMetadata = {
  id: "wheel7_shapes",
  baseId: "wheel7",
  variant: "shapes",
  name: "Wheel7",
  category: "wheel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Wheel7Shapes;
