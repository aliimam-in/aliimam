/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface XLineTopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const XLineTop = React.forwardRef<SVGSVGElement, XLineTopProps>(
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
      <path d="M18 4H6" />
  <path d="M18 8 6 20" />
  <path d="m6 8 12 12" />
    </svg>
  )
);
XLineTop.displayName = "XLineTop";
export const XLineTopMetadata = { 
  id: "x-line-top", 
  baseId: "x-line-top", 
  variant: "default", 
  name: "X Line Top", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default XLineTop;
