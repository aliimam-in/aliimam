/**
 * Auto-generated logo component: Htmx Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HtmxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HtmxIcon = React.forwardRef<SVGSVGElement, HtmxIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 168"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#111111" points="181.394935 42.749283 256 74.2039835 256 96.0617321 181.394935 127.078518 175.477838 105.581524 230.646979 84.8771384 175.477838 64.0931689"></polygon>
        <polygon fill="#111111" points="74.6050654 42.7484751 6.6060424e-14 74.2039835 1.83634114e-13 96.0617321 74.6050654 127.078518 80.5221623 105.581524 25.3530206 84.8771384 80.5221623 64.0931689"></polygon>
        <polygon fill="#4065C5" points="144.339858 -1.59458264e-15 170.003907 -1.59458264e-15 112.990192 167.110525 85.996093 167.110525"></polygon>
    </g>
    </svg>
  )
);

HtmxIcon.displayName = "HtmxIcon";

export const HtmxIconMetadata = {
  id: "htmx-icon",
  baseId: "htmx-icon",
  variant: "default",
  name: "Htmx Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 168",
} as const;

export default HtmxIcon;
