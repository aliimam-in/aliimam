/**
 * Auto-generated logo component: Modernizr (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ModernizrProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Modernizr = React.forwardRef<SVGSVGElement, ModernizrProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 123"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#D91B77">
        <path d="M0,122.88 L0,81.92 L40.96,81.92 L40.96,40.96 L81.92,40.96 L81.92,0 L122.88,0 L122.88,122.88 L0,122.88 Z"></path>
        <path d="M133.12,0 C200.9856,0 256,55.0158222 256,122.878578 L133.12,122.878578 L133.12,0 L133.12,0 Z"></path>
    </g>
    </svg>
  )
);

Modernizr.displayName = "Modernizr";

export const ModernizrMetadata = {
  id: "modernizr",
  baseId: "modernizr",
  variant: "default",
  name: "Modernizr",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 123",
} as const;

export default Modernizr;
