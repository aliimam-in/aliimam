/**
 * Auto-generated logo component: Basewell (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BasewellLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BasewellLogo = React.forwardRef<SVGSVGElement, BasewellLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 165 165"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#5DE8E8" d="M3 108.401c0-21.353 17.31-38.664 38.664-38.664H77.59c22.865 0 41.4 18.536 41.4 41.4 0 22.865-18.535 41.4-41.4 41.4H3v-44.136Z" />

    <path fill="#2B4FF1" d="M46.792 52.664C46.792 31.31 64.102 14 85.456 14h35.928c22.864 0 41.4 18.535 41.4 41.4s-18.536 41.4-41.401 41.4h-74.59V52.664Z" />
    
    <mask id="a" width="116" height="84" x="3" y="69" maskUnits="userSpaceOnUse" style={{maskType:"alpha"}}>
        <path fill="#5DE8E8" d="M3 108.401c0-21.353 17.31-38.664 38.664-38.664H77.59c22.865 0 41.4 18.536 41.4 41.4 0 22.865-18.535 41.4-41.4 41.4H3v-44.136Z" />
    </mask>
    
    <g mask="url(#a)">
        <path fill="#00A5FD" d="M46.792 52.664C46.792 31.31 64.102 14 85.456 14h35.928c22.864 0 41.4 18.535 41.4 41.4s-18.536 41.4-41.401 41.4h-74.59V52.664Z" />
    </g>
    </svg>
  )
);

BasewellLogo.displayName = "BasewellLogo";

export const BasewellLogoMetadata = {
  id: "basewell",
  baseId: "basewell",
  variant: "default",
  name: "Basewell",
  category: "mix",
  tags: [],
  viewBox: "0 0 165 165",
} as const;

export default BasewellLogo;
