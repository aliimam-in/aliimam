/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PhilippinePesoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PhilippinePeso = React.forwardRef<SVGSVGElement, PhilippinePesoProps>(
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
      <path d="M20 11H4" />
  <path d="M20 7H4" />
  <path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />
    </svg>
  )
);
PhilippinePeso.displayName = "PhilippinePeso";
export const PhilippinePesoMetadata = { 
  id: "philippine-peso", 
  baseId: "philippine-peso", 
  variant: "default", 
  name: "Philippine Peso", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PhilippinePeso;
