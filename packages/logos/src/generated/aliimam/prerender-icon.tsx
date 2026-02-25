/**
 * Auto-generated logo component: Prerender Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PrerenderIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const PrerenderIcon = React.forwardRef<SVGSVGElement, PrerenderIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 192"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
				<path d="M64,0 L64,64 L96,64 C113.672889,64 128,49.6728889 128,32 L128,0 L64,0 Z" fill="#F0DA50"></path>
				<path d="M32,0 C14.3271111,0 0,14.3271111 0,32 L0,160 C0,177.672889 14.3271111,192 32,192 L64,192 L64,0 L32,0 Z" fill="#4BC69A"></path>
				<path d="M160,128 C142.327111,128 128,142.327111 128,160 L128,192 L192,192 L192,128 L160,128 Z" fill="#F0DA50"></path>
				<path d="M224,0 L192,0 L192,192 L224,192 C241.672889,192 256,177.672889 256,160 L256,32 C256,14.3271111 241.672889,0 224,0 Z" fill="#5D7B8C"></path>
		</g>
    </svg>
  )
);

PrerenderIcon.displayName = "PrerenderIcon";

export const PrerenderIconMetadata = {
  id: "prerender-icon",
  baseId: "prerender-icon",
  variant: "default",
  name: "Prerender Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 192",
} as const;

export default PrerenderIcon;
