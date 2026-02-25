/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MagnetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Magnet = React.forwardRef<SVGSVGElement, MagnetProps>(
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
      <path d="m12 15 4 4" />
  <path d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" />
  <path d="m5 8 4 4" />
    </svg>
  )
);
Magnet.displayName = "Magnet";
export const MagnetMetadata = { 
  id: "magnet", 
  baseId: "magnet", 
  variant: "default", 
  name: "Magnet", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Magnet;
