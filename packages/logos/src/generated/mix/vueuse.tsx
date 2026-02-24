/**
 * Auto-generated logo component: Vueuse (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VueuseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const VueuseLogo = React.forwardRef<SVGSVGElement, VueuseLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 277"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#35495E" d="M202.968 0v148.146c0 41.405-33.563 74.967-74.968 74.967s-74.968-33.562-74.968-74.967V0h53.036v148.146a21.932 21.932 0 1 0 43.864 0V0h53.036Z" /><path fill="#41B883" d="M256 0v148.146c0 70.694-57.306 128.019-128 128.019S0 218.84 0 148.145V0h53.032v148.146c0 41.405 33.566 74.967 74.968 74.967s74.968-33.562 74.968-74.967V0H256Z" />
    </svg>
  )
);

VueuseLogo.displayName = "VueuseLogo";

export const VueuseLogoMetadata = {
  id: "vueuse",
  baseId: "vueuse",
  variant: "default",
  name: "Vueuse",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 277",
} as const;

export default VueuseLogo;
