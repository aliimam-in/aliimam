/**
 * Auto-generated logo component: Baseline (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BaselineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Baseline = React.forwardRef<SVGSVGElement, BaselineProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 146"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#99DBB1" points="182.918378 35.0449089 220.954789 73.0813201 183.345088 110.691626 159.83978 87.1857136 142.316872 104.707413 165.823389 128.213325 183.345088 145.736232 256 73.0813201 238.477092 55.5596211 200.440681 17.5226056"></polygon>
        <polygon fill="#99DBB3" points="72.6546102 3.43564427e-14 17.0952913 55.5593189 34.6175947 73.0816223 72.6546102 35.0446067 96.1605224 58.5505189 113.682826 41.02882 90.1769136 17.5229078"></polygon>
        <polygon fill="#008F32" points="73.0816223 110.691324 17.5229078 55.1320046 3.43564427e-14 72.654308 73.0816223 145.73593 90.1766114 128.640941 90.6045301 128.213627 200.867935 17.9496177 183.345632 0.427314287"></polygon>
    </g>
    </svg>
  )
);

Baseline.displayName = "Baseline";

export const BaselineMetadata = {
  id: "baseline",
  baseId: "baseline",
  variant: "default",
  name: "Baseline",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 146",
} as const;

export default Baseline;
