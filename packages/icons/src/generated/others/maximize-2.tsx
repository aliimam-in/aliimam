/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Maximize2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Maximize2 = React.forwardRef<SVGSVGElement, Maximize2Props>(
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
      <path d="M15 3h6v6" />
  <path d="m21 3-7 7" />
  <path d="m3 21 7-7" />
  <path d="M9 21H3v-6" />
    </svg>
  )
);
Maximize2.displayName = "Maximize2";
export const Maximize2Metadata = { 
  id: "maximize-2", 
  baseId: "maximize-2", 
  variant: "default", 
  name: "Maximize 2", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Maximize2;
