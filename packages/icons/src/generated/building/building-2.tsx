/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Building2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Building2 = React.forwardRef<SVGSVGElement, Building2Props>(
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
      <path d="M10 12h4" />
  <path d="M10 8h4" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </svg>
  )
);
Building2.displayName = "Building2";
export const Building2Metadata = { 
  id: "building-2", 
  baseId: "building-2", 
  variant: "default", 
  name: "Building 2", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Building2;
