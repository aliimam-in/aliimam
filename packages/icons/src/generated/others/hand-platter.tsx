/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HandPlatterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HandPlatter = React.forwardRef<SVGSVGElement, HandPlatterProps>(
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
      <path d="M12 3V2" />
  <path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" />
  <path d="M2 14h12a2 2 0 0 1 0 4h-2" />
  <path d="M4 10h16" />
  <path d="M5 10a7 7 0 0 1 14 0" />
  <path d="M5 14v6a1 1 0 0 1-1 1H2" />
    </svg>
  )
);
HandPlatter.displayName = "HandPlatter";
export const HandPlatterMetadata = { 
  id: "hand-platter", 
  baseId: "hand-platter", 
  variant: "default", 
  name: "Hand Platter", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HandPlatter;
