/**
 * Auto-generated logo component: Framer (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FramerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Framer = React.forwardRef<SVGSVGElement, FramerProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 384"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M0,0 L256,0 L256,128 L128,128 L0,0 Z M0,128 L128,128 L256,256 L128,256 L128,384 L0,256 L0,128 Z" fill="#000000"></path>
    </g>
    </svg>
  )
);

Framer.displayName = "Framer";

export const FramerMetadata = {
  id: "framer",
  baseId: "framer",
  variant: "default",
  name: "Framer",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 384",
} as const;

export default Framer;
