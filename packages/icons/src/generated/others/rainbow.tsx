/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RainbowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Rainbow = React.forwardRef<SVGSVGElement, RainbowProps>(
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
      <path d="M22 17a10 10 0 0 0-20 0" />
  <path d="M6 17a6 6 0 0 1 12 0" />
  <path d="M10 17a2 2 0 0 1 4 0" />
    </svg>
  )
);
Rainbow.displayName = "Rainbow";
export const RainbowMetadata = { 
  id: "rainbow", 
  baseId: "rainbow", 
  variant: "default", 
  name: "Rainbow", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Rainbow;
