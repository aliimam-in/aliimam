/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MapPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MapPlus = React.forwardRef<SVGSVGElement, MapPlusProps>(
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
      <path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12" />
  <path d="M15 5.764V12" />
  <path d="M18 15v6" />
  <path d="M21 18h-6" />
  <path d="M9 3.236v15" />
    </svg>
  )
);
MapPlus.displayName = "MapPlus";
export const MapPlusMetadata = { 
  id: "map-plus", 
  baseId: "map-plus", 
  variant: "default", 
  name: "Map Plus", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MapPlus;
