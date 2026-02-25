/**
 * Auto-generated logo component: Gleam (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GleamProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Gleam = React.forwardRef<SVGSVGElement, GleamProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
		<path d="M256,74.981 L256,181.019 L252.583,181.352 L129.216,129.53 L128,128 L256,74.981" fill="#F36A22"></path>
		<path d="M256,181.019 L181.019,256 L179.874,255.119 L127.565,131.51 L128,128 L256,181.019" fill="#F3852F"></path>
		<path d="M128,128 L125.172,129.943 L74.536,253.841 L74.981,256 L181.019,256 L128,128" fill="#F2C32E"></path>
		<path d="M0,181.019 L3.174,178.551 L125.172,127.549 L128,128 L74.981,256 L0,181.019" fill="#CBDC38"></path>
		<path d="M0,74.981 L3.174,74.766 L126.245,125.239 L128,128 L0,181.019 L0,74.981" fill="#B5D66D"></path>
		<path d="M74.981,0 L0,74.981 L128,128 L128.225,124.744 L80.496,3.026 L74.981,0" fill="#69C5E5"></path>
		<path d="M74.981,0 L181.019,0 L128,128 L74.981,0" fill="#6D9FD5"></path>
	</g>
    </svg>
  )
);

Gleam.displayName = "Gleam";

export const GleamMetadata = {
  id: "gleam",
  baseId: "gleam",
  variant: "default",
  name: "Gleam",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Gleam;
