/**
 * Auto-generated logo component: Rackspace Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RackspaceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const RackspaceIcon = React.forwardRef<SVGSVGElement, RackspaceIconProps>(
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
        <rect fill="#EA0000" x="0" y="0" width="256" height="256"></rect>
        <path d="M128.453406,88.3054695 L134.618464,55.8576704 L96.5284559,55.8576704 L68.2010883,204.8 L111.456026,204.8 L123.136179,143.38926 C130.023152,107.17719 150.798593,92.6861264 180.365328,97.1603201 L188.812453,52.7343687 C163.13409,50.3675434 138.821451,64.6951648 128.451607,88.3054695 L128.453406,88.3054695 Z" fill="#FFFFFF"></path>
    </g>
    </svg>
  )
);

RackspaceIcon.displayName = "RackspaceIcon";

export const RackspaceIconMetadata = {
  id: "rackspace-icon",
  baseId: "rackspace-icon",
  variant: "default",
  name: "Rackspace Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default RackspaceIcon;
