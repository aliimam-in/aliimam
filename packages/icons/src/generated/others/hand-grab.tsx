/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HandGrabProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HandGrab = React.forwardRef<SVGSVGElement, HandGrabProps>(
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
      <path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
  <path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
  <path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
  <path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
  <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
    </svg>
  )
);
HandGrab.displayName = "HandGrab";
export const HandGrabMetadata = { 
  id: "hand-grab", 
  baseId: "hand-grab", 
  variant: "default", 
  name: "Hand Grab", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HandGrab;
