/**
 * Auto-generated logo component: Coderwall (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoderwallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Coderwall = React.forwardRef<SVGSVGElement, CoderwallProps>(
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
      <g fill="#3E8DCC">
		<circle cx="28.8232446" cy="28.8232446" r="28.0511535"></circle>
		<circle cx="128" cy="28.8232446" r="28.0511535"></circle>
		<circle cx="227.176755" cy="28.8232446" r="28.0511535"></circle>
		<circle cx="128" cy="128" r="28.0511535"></circle>
		<circle cx="227.176755" cy="128" r="28.0511535"></circle>
		<circle cx="227.176755" cy="227.176755" r="28.0511535"></circle>
	</g>
    </svg>
  )
);

Coderwall.displayName = "Coderwall";

export const CoderwallMetadata = {
  id: "coderwall",
  baseId: "coderwall",
  variant: "default",
  name: "Coderwall",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Coderwall;
