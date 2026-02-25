/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WifiZeroProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WifiZero = React.forwardRef<SVGSVGElement, WifiZeroProps>(
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
      <path d="M12 20h.01" />
    </svg>
  )
);
WifiZero.displayName = "WifiZero";
export const WifiZeroMetadata = { 
  id: "wifi-zero", 
  baseId: "wifi-zero", 
  variant: "default", 
  name: "Wifi Zero", 
  category: "network", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WifiZero;
