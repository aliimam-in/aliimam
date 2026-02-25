/**
 * Auto-generated logo component: Alpinejs Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlpinejsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AlpinejsIcon = React.forwardRef<SVGSVGElement, AlpinejsIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 118"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
				<polygon fill="#77C1D2" points="199.111112 0 256 56.6393762 199.111112 113.278752 142.222222 56.6393762"></polygon>
				<polygon fill="#2D3441" points="56.8888888 0 174.826667 117.420507 61.0488889 117.420507 0 56.6393762"></polygon>
    </g>
    </svg>
  )
);

AlpinejsIcon.displayName = "AlpinejsIcon";

export const AlpinejsIconMetadata = {
  id: "alpinejs-icon",
  baseId: "alpinejs-icon",
  variant: "default",
  name: "Alpinejs Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 118",
} as const;

export default AlpinejsIcon;
