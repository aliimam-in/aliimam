/**
 * Auto-generated logo component: Pkg (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PkgProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Pkg = React.forwardRef<SVGSVGElement, PkgProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 229"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M130.3072,0 C173.0052,61.443 214.2812,120.842 256.0002,180.877 C214.4822,196.875 173.5742,212.636 131.9022,228.693 L131.9022,228.693 L131.9022,203.973 C134.9252,202.122 138.1572,200.142 141.6742,197.988 C137.9312,132.783 134.1942,67.695 130.3072,0 Z M125.6808,0.0042 C122.475559,55.8728897 119.361409,110.140971 116.256729,164.254382 L115.48071,177.78035 C115.092751,184.542559 114.704834,191.304234 114.3168,198.0682 C117.6368,200.0372 120.7528,201.8852 124.0728,203.8542 L124.0728,203.8542 L124.0728,228.6652 C113.032,224.414 102.03152,220.178231 91.041683,215.946516 L74.5612,209.60056 C49.84132,200.08192 25.1002,190.555 -0.0002,180.8902 C5.95194286,172.323629 11.8966367,163.767771 17.8390741,155.215156 L26.7516867,142.387731 C59.4298204,95.3559041 92.1182286,48.3091286 125.6808,0.0042 Z" fill="#000000"></path>
    </g>
    </svg>
  )
);

Pkg.displayName = "Pkg";

export const PkgMetadata = {
  id: "pkg",
  baseId: "pkg",
  variant: "default",
  name: "Pkg",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 229",
} as const;

export default Pkg;
