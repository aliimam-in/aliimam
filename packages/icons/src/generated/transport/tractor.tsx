/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TractorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tractor = React.forwardRef<SVGSVGElement, TractorProps>(
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
      <path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" />
  <path d="M16 18h-5" />
  <path d="M18 5a1 1 0 0 0-1 1v5.573" />
  <path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" />
  <path d="M4 11V4" />
  <path d="M7 15h.01" />
  <path d="M8 10.1V4" />
  <circle cx="18" cy="18" r="2" />
  <circle cx="7" cy="15" r="5" />
    </svg>
  )
);
Tractor.displayName = "Tractor";
export const TractorMetadata = { 
  id: "tractor", 
  baseId: "tractor", 
  variant: "default", 
  name: "Tractor", 
  category: "transport", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Tractor;
