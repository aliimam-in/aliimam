/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlameKindlingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlameKindling = React.forwardRef<SVGSVGElement, FlameKindlingProps>(
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
      <path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" />
  <path d="m5 22 14-4" />
  <path d="m5 18 14 4" />
    </svg>
  )
);
FlameKindling.displayName = "FlameKindling";
export const FlameKindlingMetadata = { 
  id: "flame-kindling", 
  baseId: "flame-kindling", 
  variant: "default", 
  name: "Flame Kindling", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlameKindling;
