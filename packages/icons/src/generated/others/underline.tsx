/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UnderlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Underline = React.forwardRef<SVGSVGElement, UnderlineProps>(
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
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
  <line x1="4" x2="20" y1="20" y2="20" />
    </svg>
  )
);
Underline.displayName = "Underline";
export const UnderlineMetadata = { 
  id: "underline", 
  baseId: "underline", 
  variant: "default", 
  name: "Underline", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Underline;
