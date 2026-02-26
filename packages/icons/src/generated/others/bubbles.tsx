/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BubblesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bubbles = React.forwardRef<SVGSVGElement, BubblesProps>(
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
      <path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5" />
  <circle cx="18.5" cy="8.5" r="3.5" />
  <circle cx="7.5" cy="16.5" r="5.5" />
  <circle cx="7.5" cy="4.5" r="2.5" />
    </svg>
  )
);
Bubbles.displayName = "Bubbles";
export const BubblesMetadata = { 
  id: "bubbles", 
  baseId: "bubbles", 
  variant: "default", 
  name: "Bubbles", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Bubbles;
