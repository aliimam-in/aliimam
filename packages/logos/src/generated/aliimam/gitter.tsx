/**
 * Auto-generated logo component: Gitter (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GitterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Gitter = React.forwardRef<SVGSVGElement, GitterProps>(
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
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stopColor="#FB0766" offset="0%"></stop>
            <stop stopColor="#C50948" offset="100%"></stop>
        </linearGradient>
    </defs>
	<g>
		<path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="url(#linearGradient-1)"></path>
		<path d="M83.914,62.873 L96.439,62.873 L96.439,145.534 L83.914,145.534 L83.914,62.873 Z M160.063,82.912 L172.587,82.912 L172.587,145.534 L160.063,145.534 L160.063,82.912 Z M109.464,82.912 L121.988,82.912 L121.988,193.378 L109.464,193.378 L109.464,82.912 Z M134.513,82.912 L147.038,82.912 L147.038,193.378 L134.513,193.378 L134.513,82.912 Z" fill="#FFFFFF"></path>
	</g>
    </svg>
  )
);

Gitter.displayName = "Gitter";

export const GitterMetadata = {
  id: "gitter",
  baseId: "gitter",
  variant: "default",
  name: "Gitter",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Gitter;
