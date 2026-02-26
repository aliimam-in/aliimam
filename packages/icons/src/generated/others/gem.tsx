/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GemProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gem = React.forwardRef<SVGSVGElement, GemProps>(
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
      <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
  <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
  <path d="M2 9h20" />
    </svg>
  )
);
Gem.displayName = "Gem";
export const GemMetadata = { 
  id: "gem", 
  baseId: "gem", 
  variant: "default", 
  name: "Gem", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Gem;
