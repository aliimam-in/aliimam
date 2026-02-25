/**
 * Auto-generated logo component: Vue (default)
 * Category: framework
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
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2066_388)">
<path d="M19.2 1H24L12 21.981L0 1H9.18L12 5.86516L14.76 1H19.2Z" fill="#41B883"/>
<path d="M0 1L12 21.981L24 1H19.2L12 13.5886L4.74 1H0Z" fill="#41B883"/>
<path d="M4.73999 1L12 13.6494L19.2 1H14.76L12 5.86516L9.17999 1H4.73999Z" fill="#35495E"/>
</g>
<defs>
<clipPath id="clip0_2066_388">
<rect width="24" height="21" fill="white" transform="translate(0 1)"/>
</clipPath>
</defs>
    </svg>
  )
);

Vue.displayName = "Vue";

export const VueMetadata = {
  id: "Vue",
  baseId: "Vue",
  variant: "default",
  name: "Vue",
  category: "framework",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Vue;
