/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HexHexRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HexHexRounded = React.forwardRef<SVGSVGElement, HexHexRoundedProps>(
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
      <path d="M17 3.29999H7L2 12L7 20.7H17L22 12L17 3.29999Z"   strokeMiterlimit="10"/>
<path d="M10.9001 14H7.0001L5.1001 17.3L7.0001 20.7H10.9001L12.8001 17.3L10.9001 14Z"   strokeMiterlimit="10"/>
<path d="M14.2999 8H6.9999L3.3999 14.3L6.9999 20.7H14.2999L17.9999 14.3L14.2999 8Z"   strokeMiterlimit="10"/>
    </svg>
  )
);
HexHexRounded.displayName = "HexHexRounded";
export const HexHexRoundedMetadata = { 
  id: "hex-hex_rounded", 
  baseId: "hex-hex", 
  variant: "rounded", 
  name: "Hex Hex", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HexHexRounded;
