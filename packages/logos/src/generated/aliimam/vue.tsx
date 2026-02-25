/**
 * Auto-generated logo component: Vue (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VueProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Vue = React.forwardRef<SVGSVGElement, VueProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 221"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
		<path d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z" fill="#41B883"></path>
		<path d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z" fill="#41B883"></path>
		<path d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z" fill="#35495E"></path>
	</g>
    </svg>
  )
);

Vue.displayName = "Vue";

export const VueMetadata = {
  id: "vue",
  baseId: "vue",
  variant: "default",
  name: "Vue",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 221",
} as const;

export default Vue;
