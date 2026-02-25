/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MapPinXInsideProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MapPinXInside = React.forwardRef<SVGSVGElement, MapPinXInsideProps>(
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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
  <path d="m14.5 7.5-5 5" />
  <path d="m9.5 7.5 5 5" />
    </svg>
  )
);
MapPinXInside.displayName = "MapPinXInside";
export const MapPinXInsideMetadata = { 
  id: "map-pin-x-inside", 
  baseId: "map-pin-x-inside", 
  variant: "default", 
  name: "Map Pin X Inside", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MapPinXInside;
