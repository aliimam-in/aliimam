/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EuroProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Euro = React.forwardRef<SVGSVGElement, EuroProps>(
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
      <path d="M4 10h12" />
  <path d="M4 14h9" />
  <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
    </svg>
  )
);
Euro.displayName = "Euro";
export const EuroMetadata = { 
  id: "euro", 
  baseId: "euro", 
  variant: "default", 
  name: "Euro", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Euro;
