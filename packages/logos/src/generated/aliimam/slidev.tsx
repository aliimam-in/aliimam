/**
 * Auto-generated logo component: Slidev (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SlidevProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Slidev = React.forwardRef<SVGSVGElement, SlidevProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="-8.88888889%" x2="100%" y2="100%" id="linearGradient-1">
            <stop stopColor="#3ACBD4" offset="0%"></stop>
            <stop stopColor="#2988B1" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-10.5555556%" y1="-12.2222222%" x2="84.5361111%" y2="100%" id="linearGradient-2">
            <stop stopColor="#95F0CF" offset="0%"></stop>
            <stop stopColor="#3AB9D5" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-0.132239836%" y1="-8.07272088%" x2="12.3609146%" y2="104.494726%" id="linearGradient-3">
            <stop stopColor="#FFEB83" offset="0%"></stop>
            <stop stopColor="#FFEB83" offset="0.01%"></stop>
            <stop stopColor="#FFDD35" offset="8.33333%"></stop>
            <stop stopColor="#FFBB13" offset="60.1773%"></stop>
            <stop stopColor="#FFA800" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <path d="M71.3846154,34.4615385 L219.076923,34.4615385 C239.468975,34.4615385 256,50.9925631 256,71.3846154 L256,219.076923 C256,239.468975 239.468975,256 219.076923,256 L71.3846154,256 C50.9925631,256 34.4615385,239.468975 34.4615385,219.076923 L34.4615385,71.3846154 C34.4615385,50.9925631 50.9925631,34.4615385 71.3846154,34.4615385 Z" fill="url(#linearGradient-1)"></path>
        <path d="M110.769231,0 C171.945388,0 221.538462,49.5930739 221.538462,110.769231 C221.538462,171.945388 171.945388,221.538462 110.769231,221.538462 C49.5930739,221.538462 0,171.945388 0,110.769231 C0,49.5930739 49.5930739,0 110.769231,0 Z" fill="url(#linearGradient-2)"></path>
        <path d="M138.158769,157.353846 C135.261785,146.542031 133.813415,141.136246 135.246523,137.402831 C136.496492,134.146462 139.069538,131.573415 142.325908,130.323446 C146.059323,128.890338 151.465108,130.338708 162.276923,133.235692 L216.015508,147.634954 C226.827077,150.531938 232.232862,151.980308 234.749538,155.088246 C236.944738,157.798892 237.886523,161.313969 237.3408,164.759138 C236.715323,168.708677 232.757908,172.666092 224.843323,180.580677 L185.503754,219.920246 C177.589169,227.834831 173.631754,231.792246 169.681969,232.417723 C166.2368,232.963446 162.721969,232.021662 160.011323,229.826462 C156.903385,227.309785 155.455015,221.904 152.558031,211.092431 L138.158769,157.353846 Z" fill="url(#linearGradient-3)"></path>
    </g>
    </svg>
  )
);

Slidev.displayName = "Slidev";

export const SlidevMetadata = {
  id: "slidev",
  baseId: "slidev",
  variant: "default",
  name: "Slidev",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default Slidev;
