/**
 * Auto-generated logo component: Codio (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CodioProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Codio = React.forwardRef<SVGSVGElement, CodioProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 296"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
		<path d="M125.305643,214.373041 L126.239812,292.10423 L127.919749,295.563636 L255.598746,221.813166 L183.29279,180.002508 L127.919749,211.94232 L125.305643,214.373041 Z" fill="#A3BAF0"></path>
		<path d="M0.240752351,221.813166 L127.919749,295.563636 L127.919749,212.022571 L72.6269592,180.082759 L72.6269592,116.203135 L72.6269568,113.083071 L4.9545453,74.3924765 L0.240752351,74.3924765 L0.240752351,221.813166 Z" fill="#4474E1"></path>
		<path d="M2.96584007,75.9665017 C13.2811402,81.9246739 50.3589941,103.34104 70.344363,114.884695 C71.1052284,115.324175 72.6269592,116.203135 72.6269592,116.203135 L127.919749,84.2633229 L183.29279,116.203135 L255.598746,74.3924765 L127.919749,0.64200627 L0.240752351,74.3924765 C0.240752351,74.3924765 1.21998708,74.9580877 2.96584007,75.9665017 Z" fill="#C7D6F7"></path>
	</g>
    </svg>
  )
);

Codio.displayName = "Codio";

export const CodioMetadata = {
  id: "codio",
  baseId: "codio",
  variant: "default",
  name: "Codio",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 296",
} as const;

export default Codio;
