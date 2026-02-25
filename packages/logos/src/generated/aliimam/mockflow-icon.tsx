/**
 * Auto-generated logo component: Mockflow Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MockflowIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MockflowIcon = React.forwardRef<SVGSVGElement, MockflowIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#7957FF" points="146.285714 152.380952 219.428571 100.977778 146.285714 100.977778"></polygon>
        <polygon fill="#1B7CE2" points="90.0063492 84.1142857 51.8095238 141.206349 48.7619048 146.08254 48.5587302 146.08254 0 219.428571 0 0"></polygon>
        <polygon fill="#7957FF" points="219.428571 48.7619048 146.285714 48.7619048 146.285714 -3.60910596e-15 256 -3.60910596e-15"></polygon>
        <polygon fill="#F845C6" points="146.285714 0 146.285714 219.428571 48.7619048 146.08254 51.8095238 141.206349 90.0063492 84.1142857"></polygon>
    </g>
    </svg>
  )
);

MockflowIcon.displayName = "MockflowIcon";

export const MockflowIconMetadata = {
  id: "mockflow-icon",
  baseId: "mockflow-icon",
  variant: "default",
  name: "Mockflow Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 220",
} as const;

export default MockflowIcon;
