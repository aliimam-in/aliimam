/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlameProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Flame = React.forwardRef<SVGSVGElement, FlameProps>(
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
      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
    </svg>
  )
);
Flame.displayName = "Flame";
export const FlameMetadata = { 
  id: "flame", 
  baseId: "flame", 
  variant: "default", 
  name: "Flame", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Flame;
