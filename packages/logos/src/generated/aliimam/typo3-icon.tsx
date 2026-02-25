/**
 * Auto-generated logo component: Typo3 Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Typo3IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Typo3Icon = React.forwardRef<SVGSVGElement, Typo3IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 260"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M109.525333,4.05333333 C104.810667,8.08533333 101.461333,12.8 101.461333,26.88 C101.461333,65.1946667 149.824,180.288 182.762667,180.288 C186.462268,180.338187 190.147176,179.812799 193.685333,178.730667 L193.616,178.75 L192.774258,180.100166 C164.346546,225.411559 130.133077,258.650903 109.429541,259.317782 L108.8,259.328 C63.8293333,259.328 0,123.562667 0,63.8293333 C0,54.4213333 2.13333333,47.04 5.376,42.4533333 C20.8426667,23.552 69.2053333,8.74666667 109.525333,4.05333333 Z M172.672,0 C214.314667,0 256,6.72 256,30.2293333 C256,77.9306667 225.749333,135.744 210.304,135.744 C182.762667,135.744 148.437333,59.136 148.437333,20.8213333 C148.437333,3.34933333 155.136,0 172.608,0 L172.672,0 Z" fill="#F49700"></path>
    </g>
    </svg>
  )
);

Typo3Icon.displayName = "Typo3Icon";

export const Typo3IconMetadata = {
  id: "typo3-icon",
  baseId: "typo3-icon",
  variant: "default",
  name: "Typo3 Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 260",
} as const;

export default Typo3Icon;
