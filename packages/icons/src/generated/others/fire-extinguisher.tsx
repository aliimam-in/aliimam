/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FireExtinguisherProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FireExtinguisher = React.forwardRef<SVGSVGElement, FireExtinguisherProps>(
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
      <path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" />
  <path d="M9 18h8" />
  <path d="M18 3h-3" />
  <path d="M11 3a6 6 0 0 0-6 6v11" />
  <path d="M5 13h4" />
  <path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" />
    </svg>
  )
);
FireExtinguisher.displayName = "FireExtinguisher";
export const FireExtinguisherMetadata = { 
  id: "fire-extinguisher", 
  baseId: "fire-extinguisher", 
  variant: "default", 
  name: "Fire Extinguisher", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FireExtinguisher;
