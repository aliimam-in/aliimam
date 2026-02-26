/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoonProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Moon = React.forwardRef<SVGSVGElement, MoonProps>(
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
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </svg>
  )
);
Moon.displayName = "Moon";
export const MoonMetadata = { 
  id: "moon", 
  baseId: "moon", 
  variant: "default", 
  name: "Moon", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Moon;
