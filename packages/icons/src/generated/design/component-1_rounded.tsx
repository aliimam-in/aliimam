/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Component1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Component1Rounded = React.forwardRef<SVGSVGElement, Component1RoundedProps>(
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
      <path d="M20.95 14.55L14.56 20.94C13.16 22.34 10.86 22.34 9.45002 20.94L3.06001 14.55C1.66001 13.15 1.66001 10.85 3.06001 9.44001L9.45002 3.05C10.85 1.65 13.15 1.65 14.56 3.05L20.95 9.44001C22.35 10.85 22.35 13.15 20.95 14.55Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Component1Rounded.displayName = "Component1Rounded";
export const Component1RoundedMetadata = { 
  id: "component-1_rounded", 
  baseId: "component-1", 
  variant: "rounded", 
  name: "Component 1", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Component1Rounded;
