/**
 * Auto-generated logo component: Vue (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VueLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const VueLogo = React.forwardRef<SVGSVGElement, VueLogoProps>(
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
      <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883" /><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883" /><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E" />
    </svg>
  )
);

VueLogo.displayName = "VueLogo";

export const VueLogoMetadata = {
  id: "vue",
  baseId: "vue",
  variant: "default",
  name: "Vue",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 221",
} as const;

export default VueLogo;
