/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HdProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Hd = React.forwardRef<SVGSVGElement, HdProps>(
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
      <path d="M10 12H6" />
  <path d="M10 15V9" />
  <path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" />
  <path d="M6 15V9" />
  <rect x="2" y="5" width="20" height="14" rx="2" />
    </svg>
  )
);
Hd.displayName = "Hd";
export const HdMetadata = { 
  id: "hd", 
  baseId: "hd", 
  variant: "default", 
  name: "Hd", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Hd;
