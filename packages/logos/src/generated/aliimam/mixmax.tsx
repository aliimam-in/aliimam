/**
 * Auto-generated logo component: Mixmax (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixmaxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Mixmax = React.forwardRef<SVGSVGElement, MixmaxProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 203"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
		<path d="M0,202.999 L50.731,202.999 L50.731,0.007 L0,0.007 L0,202.999 Z" fill="#E55CFF"></path>
		<path d="M102.6333,0.0068 L0.0003,202.9988 L50.7313,202.9988 L153.3643,0.0068 L102.6333,0.0068 Z" fill="#24235C"></path>
		<path d="M102.633,202.999 L153.364,202.999 L153.364,0.007 L102.633,0.007 L102.633,202.999 Z" fill="#E55CFF"></path>
		<path d="M205.2693,0.0077 L102.6363,202.9997 L153.3663,202.9997 L255.9993,0.0077 L205.2693,0.0077 Z" fill="#24235C"></path>
		<path d="M204.982,202.999 L255.713,202.999 L255.713,0.007 L204.982,0.007 L204.982,202.999 Z" fill="#E55CFF"></path>
	</g>
    </svg>
  )
);

Mixmax.displayName = "Mixmax";

export const MixmaxMetadata = {
  id: "mixmax",
  baseId: "mixmax",
  variant: "default",
  name: "Mixmax",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 203",
} as const;

export default Mixmax;
