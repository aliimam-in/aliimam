/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UmbrellaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Umbrella = React.forwardRef<SVGSVGElement, UmbrellaProps>(
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
      <path d="M12 13v7a2 2 0 0 0 4 0" />
  <path d="M12 2v2" />
  <path d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" />
    </svg>
  )
);
Umbrella.displayName = "Umbrella";
export const UmbrellaMetadata = { 
  id: "umbrella", 
  baseId: "umbrella", 
  variant: "default", 
  name: "Umbrella", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Umbrella;
