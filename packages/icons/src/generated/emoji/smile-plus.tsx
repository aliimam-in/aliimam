/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SmilePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SmilePlus = React.forwardRef<SVGSVGElement, SmilePlusProps>(
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
      <path d="M22 11v1a10 10 0 1 1-9-10" />
  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
  <line x1="9" x2="9.01" y1="9" y2="9" />
  <line x1="15" x2="15.01" y1="9" y2="9" />
  <path d="M16 5h6" />
  <path d="M19 2v6" />
    </svg>
  )
);
SmilePlus.displayName = "SmilePlus";
export const SmilePlusMetadata = { 
  id: "smile-plus", 
  baseId: "smile-plus", 
  variant: "default", 
  name: "Smile Plus", 
  category: "emoji", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SmilePlus;
