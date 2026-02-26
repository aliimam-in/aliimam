/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VenusAndMarsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VenusAndMars = React.forwardRef<SVGSVGElement, VenusAndMarsProps>(
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
      <path d="M10 20h4" />
  <path d="M12 16v6" />
  <path d="M17 2h4v4" />
  <path d="m21 2-5.46 5.46" />
  <circle cx="12" cy="11" r="5" />
    </svg>
  )
);
VenusAndMars.displayName = "VenusAndMars";
export const VenusAndMarsMetadata = { 
  id: "venus-and-mars", 
  baseId: "venus-and-mars", 
  variant: "default", 
  name: "Venus And Mars", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VenusAndMars;
