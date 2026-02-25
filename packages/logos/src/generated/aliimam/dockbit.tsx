/**
 * Auto-generated logo component: Dockbit (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DockbitProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Dockbit = React.forwardRef<SVGSVGElement, DockbitProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 286"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient x1="77.0408937%" y1="13.1836579%" x2="22.8410618%" y2="87.5393848%" id="linearGradient-1">
            <stop stopColor="#7236DC" offset="0%"></stop>
            <stop stopColor="#3F37AE" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <path d="M240.48144,60.1304836 L143.524809,4.15951581 C133.917883,-1.38550527 122.086283,-1.38550527 112.479357,4.15951581 L15.5227262,60.1304836 C5.91996615,65.6796707 0,75.9281695 0,87.0182116 L0,198.972645 C0,210.062688 5.91996615,220.311186 15.5227262,225.856207 L112.479357,281.839673 C122.086283,287.384694 133.917883,287.384694 143.524809,281.839673 L240.48144,225.856207 C250.0842,220.311186 256,210.062688 256,198.972645 L256,87.0182116 C256,75.9281695 250.0842,65.6796707 240.48144,60.1304836 L240.48144,60.1304836 Z M231.166138,196.048074 C231.166138,199.376753 229.391398,202.451302 226.508487,204.117725 L203.82431,217.215806 C200.941399,218.878063 197.391919,218.878063 194.509007,217.215806 L171.820664,204.117725 C168.941919,202.455469 167.167179,199.376753 167.167179,196.048074 L167.167179,169.851911 C167.167179,166.523232 168.941919,163.452848 171.820664,161.786426 L194.509007,148.688345 C197.391919,147.026088 200.941399,147.026088 203.82431,148.688345 L226.508487,161.786426 C229.391398,163.448682 231.166138,166.523232 231.166138,169.851911 L231.166138,196.048074 Z" fill="url(#linearGradient-1)"></path>
    </g>
    </svg>
  )
);

Dockbit.displayName = "Dockbit";

export const DockbitMetadata = {
  id: "dockbit",
  baseId: "dockbit",
  variant: "default",
  name: "Dockbit",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 286",
} as const;

export default Dockbit;
