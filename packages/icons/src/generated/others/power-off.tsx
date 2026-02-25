/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PowerOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PowerOff = React.forwardRef<SVGSVGElement, PowerOffProps>(
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
      <path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
  <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
  <path d="M12 2v4" />
  <path d="m2 2 20 20" />
    </svg>
  )
);
PowerOff.displayName = "PowerOff";
export const PowerOffMetadata = { 
  id: "power-off", 
  baseId: "power-off", 
  variant: "default", 
  name: "Power Off", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PowerOff;
