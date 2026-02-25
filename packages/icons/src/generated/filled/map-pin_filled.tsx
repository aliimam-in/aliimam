/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MapPinFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MapPinFilled = React.forwardRef<SVGSVGElement, MapPinFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
    </svg>
  )
);
MapPinFilled.displayName = "MapPinFilled";
export const MapPinFilledMetadata = { id: "map-pin_filled", baseId: "map-pin", variant: "filled", name: "Map Pin", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default MapPinFilled;
