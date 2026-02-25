/**
 * Auto-generated logo component: Hosted Graphite (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HostedGraphiteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HostedGraphite = React.forwardRef<SVGSVGElement, HostedGraphiteProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 294"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M256,72.1533204 L256,220.210948 L126.450785,293.538869 L0,220.210948 L0,72.1533204 L126.450785,0 C126.450785,0 151.05455,14.5205718 163.124413,20.7029324 C194.374578,36.7219653 256,72.1533204 256,72.1533204 L256,72.1533204 L256,72.1533204 Z M151.586262,63.6024246 L151.586262,127.4127 L102.378732,127.4127 L102.378732,63.6024246 L45.1326826,97.4628124 L45.1326826,197.076642 L102.378732,232.546666 L102.378732,190.551085 L62.9837051,166.445196 L151.586262,166.445196 L151.586262,232.546666 C151.586262,232.546666 190.154718,207.314515 206.903647,197.076642 L206.903647,97.4628124 L151.586262,63.6024246 L151.586262,63.6024246 Z" fill="#EC7A51"></path>
    </g>
    </svg>
  )
);

HostedGraphite.displayName = "HostedGraphite";

export const HostedGraphiteMetadata = {
  id: "hosted-graphite",
  baseId: "hosted-graphite",
  variant: "default",
  name: "Hosted Graphite",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 294",
} as const;

export default HostedGraphite;
