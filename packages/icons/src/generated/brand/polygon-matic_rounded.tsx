/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PolygonMaticRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PolygonMaticRounded = React.forwardRef<SVGSVGElement, PolygonMaticRoundedProps>(
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
      <path d="M12 12.1L7.5 14.7L3 12.1V6.89999L7.5 4.29999L12 6.89999V8.49999"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.1L16.5 9.5L21 12.1V17.3L16.5 19.9L12 17.3V15.6"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PolygonMaticRounded.displayName = "PolygonMaticRounded";
export const PolygonMaticRoundedMetadata = { 
  id: "polygon-matic_rounded", 
  baseId: "polygon-matic", 
  variant: "rounded", 
  name: "Polygon Matic", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PolygonMaticRounded;
