/**
 * Auto-generated logo component: Progress (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ProgressProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Progress = React.forwardRef<SVGSVGElement, ProgressProps>(
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
      <g>
        <path d="M63.0169512,260.486819 L2.76878549,223.491685 L63.0169512,187.62086 L63.0169512,260.486819 Z M93.8462294,276.77889 L93.8462294,172.754406 L0,115.90552 L65.3199394,77.3743388 L156.861014,133.326337 L156.861014,237.856283 L93.8462294,276.77889 Z M184.778518,263.985715 L184.778518,119.229375 L57.5162107,41.8610902 L128.239398,0 L256,74.0487631 L256,221.170234 L184.778518,263.985715 Z" fill="#5CE500"></path>
    </g>
    </svg>
  )
);

Progress.displayName = "Progress";

export const ProgressMetadata = {
  id: "progress",
  baseId: "progress",
  variant: "default",
  name: "Progress",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 277",
} as const;

export default Progress;
