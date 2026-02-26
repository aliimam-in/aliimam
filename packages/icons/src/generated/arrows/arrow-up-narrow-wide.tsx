/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowUpNarrowWideProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpNarrowWide = React.forwardRef<SVGSVGElement, ArrowUpNarrowWideProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m3 8 4-4 4 4" />
  <path d="M7 4v16" />
  <path d="M11 12h4" />
  <path d="M11 16h7" />
  <path d="M11 20h10" />
    </svg>
  )
);
ArrowUpNarrowWide.displayName = "ArrowUpNarrowWide";
export const ArrowUpNarrowWideMetadata = { 
  id: "arrow-up-narrow-wide", 
  baseId: "arrow-up-narrow-wide", 
  variant: "default", 
  name: "Arrow Up Narrow Wide", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowUpNarrowWide;
