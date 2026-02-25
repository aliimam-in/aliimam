/**
 * Auto-generated logo component: Rocky Linux Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RockyLinuxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const RockyLinuxIcon = React.forwardRef<SVGSVGElement, RockyLinuxIconProps>(
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
      <g>
        <path d="M248.877333,170.210667 C253.492,156.994667 256,142.790667 256,128 C256,57.3066667 198.692,0 128,0 C57.3066667,0 0,57.3066667 0,128 C0,162.978667 14.0306667,194.681333 36.7706667,217.784 L166.610667,87.944 L198.666667,120 L248.877333,170.210667 Z M225.496,210.94 L166.610667,152.056 L74.3973333,244.269333 C90.7026667,251.798667 108.86,256 128,256 C167.050667,256 202.018667,238.512 225.496,210.94 L225.496,210.94 Z" fill="#10B981"></path>
    </g>
    </svg>
  )
);

RockyLinuxIcon.displayName = "RockyLinuxIcon";

export const RockyLinuxIconMetadata = {
  id: "rocky-linux-icon",
  baseId: "rocky-linux-icon",
  variant: "default",
  name: "Rocky Linux Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default RockyLinuxIcon;
