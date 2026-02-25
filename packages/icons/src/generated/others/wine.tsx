/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Wine = React.forwardRef<SVGSVGElement, WineProps>(
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
      <path d="M8 22h8" />
  <path d="M7 10h10" />
  <path d="M12 15v7" />
  <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
    </svg>
  )
);
Wine.displayName = "Wine";
export const WineMetadata = { 
  id: "wine", 
  baseId: "wine", 
  variant: "default", 
  name: "Wine", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Wine;
