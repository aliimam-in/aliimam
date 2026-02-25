/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MaximizeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Maximize = React.forwardRef<SVGSVGElement, MaximizeProps>(
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
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
  <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
  <path d="M3 16v3a2 2 0 0 0 2 2h3" />
  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  )
);
Maximize.displayName = "Maximize";
export const MaximizeMetadata = { 
  id: "maximize", 
  baseId: "maximize", 
  variant: "default", 
  name: "Maximize", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Maximize;
