/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EarOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EarOff = React.forwardRef<SVGSVGElement, EarOffProps>(
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
      <path d="M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" />
  <path d="M6 8.5c0-.75.13-1.47.36-2.14" />
  <path d="M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" />
  <path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" />
  <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
);
EarOff.displayName = "EarOff";
export const EarOffMetadata = { 
  id: "ear-off", 
  baseId: "ear-off", 
  variant: "default", 
  name: "Ear Off", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EarOff;
