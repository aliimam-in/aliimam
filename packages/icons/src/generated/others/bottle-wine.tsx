/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BottleWineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BottleWine = React.forwardRef<SVGSVGElement, BottleWineProps>(
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
      <path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" />
  <path d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" />
    </svg>
  )
);
BottleWine.displayName = "BottleWine";
export const BottleWineMetadata = { 
  id: "bottle-wine", 
  baseId: "bottle-wine", 
  variant: "default", 
  name: "Bottle Wine", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BottleWine;
