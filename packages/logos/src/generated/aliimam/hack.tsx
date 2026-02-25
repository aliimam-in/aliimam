/**
 * Auto-generated logo component: Hack (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Hack = React.forwardRef<SVGSVGElement, HackProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 381"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
		<path d="M131.015,126.065 L248.103,126.068 L131.015,241.464 L131.015,126.065" fill="#FFFFFF"></path>
		<path d="M0.002,256.489 L116.674,256.489 L0.002,374.955 L0.002,256.489" fill="#868686"></path>
		<path d="M0.001,119.581 L121.948,0 L122.009,121.501 L0.001,243.185 L0.001,119.581" fill="#868686"></path>
		<path d="M256.001,131.733 L256.001,256.121 L131.02,380.188 L131.02,255.832 L256.001,131.733 L256.001,131.733 Z" fill="#868686"></path>
		<path d="M121.909,246.908 L8.396,246.905 L121.909,133.32 L121.909,246.908" fill="#F7852F"></path>
	</g>
    </svg>
  )
);

Hack.displayName = "Hack";

export const HackMetadata = {
  id: "hack",
  baseId: "hack",
  variant: "default",
  name: "Hack",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 381",
} as const;

export default Hack;
