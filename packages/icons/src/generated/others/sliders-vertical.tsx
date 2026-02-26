/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SlidersVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SlidersVertical = React.forwardRef<SVGSVGElement, SlidersVerticalProps>(
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
      <path d="M10 8h4" />
  <path d="M12 21v-9" />
  <path d="M12 8V3" />
  <path d="M17 16h4" />
  <path d="M19 12V3" />
  <path d="M19 21v-5" />
  <path d="M3 14h4" />
  <path d="M5 10V3" />
  <path d="M5 21v-7" />
    </svg>
  )
);
SlidersVertical.displayName = "SlidersVertical";
export const SlidersVerticalMetadata = { 
  id: "sliders-vertical", 
  baseId: "sliders-vertical", 
  variant: "default", 
  name: "Sliders Vertical", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SlidersVertical;
