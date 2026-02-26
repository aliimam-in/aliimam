/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MarsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mars = React.forwardRef<SVGSVGElement, MarsProps>(
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
      <path d="M16 3h5v5" />
  <path d="m21 3-6.75 6.75" />
  <circle cx="10" cy="14" r="6" />
    </svg>
  )
);
Mars.displayName = "Mars";
export const MarsMetadata = { 
  id: "mars", 
  baseId: "mars", 
  variant: "default", 
  name: "Mars", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Mars;
