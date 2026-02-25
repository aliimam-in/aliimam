/**
 * Auto-generated logo component: Snowpack (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SnowpackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Snowpack = React.forwardRef<SVGSVGElement, SnowpackProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 205"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M253.963604,185.07818 L138.764737,5.87994218 C136.40876,2.21597821 132.3528,0 127.996836,0 C123.640886,0 119.584926,2.21597821 117.228949,5.87994218 L2.03008161,185.07818 C-0.502202786,189.016944 -0.681686773,194.024087 1.56208622,198.134052 C3.80689174,202.242979 8.11583573,204.797986 12.7979757,204.797986 L243.19571,204.797986 C247.879664,204.797986 252.187622,202.242011 254.4316,198.130052 C256.675361,194.02149 256.495863,189.01549 253.963604,185.07818 Z M127.996843,36.4716414 L162.152507,89.599119 L127.996843,89.599119 L102.397095,115.198867 L87.1732444,99.975017 L127.996843,36.4716414 Z" fill="#000000" fillRule="nonzero"></path>
    </g>
    </svg>
  )
);

Snowpack.displayName = "Snowpack";

export const SnowpackMetadata = {
  id: "snowpack",
  baseId: "snowpack",
  variant: "default",
  name: "Snowpack",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 205",
} as const;

export default Snowpack;
