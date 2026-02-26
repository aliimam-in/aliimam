/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TorusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Torus = React.forwardRef<SVGSVGElement, TorusProps>(
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
      <ellipse cx="12" cy="11" rx="3" ry="2" />
  <ellipse cx="12" cy="12.5" rx="10" ry="8.5" />
    </svg>
  )
);
Torus.displayName = "Torus";
export const TorusMetadata = { 
  id: "torus", 
  baseId: "torus", 
  variant: "default", 
  name: "Torus", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Torus;
