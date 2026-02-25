/**
 * Auto-generated logo component: Lit Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LitIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LitIcon = React.forwardRef<SVGSVGElement, LitIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
				<polygon fill="#00E8FF" points="64 192 89.9257031 147.272598 128.15876 128.15876 192.133047 192.133047 202.966055 253.886973 192 320 128 256 89.9257031 230.385117"></polygon>
				<path d="M128,256 L128,128 L192,64 L192,192 L128,256 Z M0,256 L64,320 L73.2016406,259.398301 L64,192 L26.457793,215.709199 L0,256 Z" fill="#283198"></path>
				<path d="M64,192 L64,64 L128,0 L128,128 L64,192 Z M192,320 L192,192 L256,128 L256,256 L192,320 Z M0,256 L0,128 L64,192 L0,256 Z" fill="#324FFF"></path>
				<polygon fill="#00FFFF" points="64 320 64 192 128 256"></polygon>
    </g>
    </svg>
  )
);

LitIcon.displayName = "LitIcon";

export const LitIconMetadata = {
  id: "lit-icon",
  baseId: "lit-icon",
  variant: "default",
  name: "Lit Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 320",
} as const;

export default LitIcon;
