/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RadioProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Radio = React.forwardRef<SVGSVGElement, RadioProps>(
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
      <path d="M16.247 7.761a6 6 0 0 1 0 8.478" />
  <path d="M19.075 4.933a10 10 0 0 1 0 14.134" />
  <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
  <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);
Radio.displayName = "Radio";
export const RadioMetadata = { 
  id: "radio", 
  baseId: "radio", 
  variant: "default", 
  name: "Radio", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Radio;
