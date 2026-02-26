/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MapPinPlusInsideProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MapPinPlusInside = React.forwardRef<SVGSVGElement, MapPinPlusInsideProps>(
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
  <path d="M12 7v6" />
  <path d="M9 10h6" />
    </svg>
  )
);
MapPinPlusInside.displayName = "MapPinPlusInside";
export const MapPinPlusInsideMetadata = { 
  id: "map-pin-plus-inside", 
  baseId: "map-pin-plus-inside", 
  variant: "default", 
  name: "Map Pin Plus Inside", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MapPinPlusInside;
