/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CirclePlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CirclePlay = React.forwardRef<SVGSVGElement, CirclePlayProps>(
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
      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
  <circle cx="12" cy="12" r="10" />
    </svg>
  )
);
CirclePlay.displayName = "CirclePlay";
export const CirclePlayMetadata = { 
  id: "circle-play", 
  baseId: "circle-play", 
  variant: "default", 
  name: "Circle Play", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CirclePlay;
