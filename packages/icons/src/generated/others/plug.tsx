/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlugProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Plug = React.forwardRef<SVGSVGElement, PlugProps>(
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
      <path d="M12 22v-5" />
  <path d="M15 8V2" />
  <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" />
  <path d="M9 8V2" />
    </svg>
  )
);
Plug.displayName = "Plug";
export const PlugMetadata = { 
  id: "plug", 
  baseId: "plug", 
  variant: "default", 
  name: "Plug", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Plug;
