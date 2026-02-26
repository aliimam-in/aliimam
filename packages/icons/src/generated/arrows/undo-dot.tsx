/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UndoDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UndoDot = React.forwardRef<SVGSVGElement, UndoDotProps>(
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
      <path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
  <path d="M3 7v6h6" />
  <circle cx="12" cy="17" r="1" />
    </svg>
  )
);
UndoDot.displayName = "UndoDot";
export const UndoDotMetadata = { 
  id: "undo-dot", 
  baseId: "undo-dot", 
  variant: "default", 
  name: "Undo Dot", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UndoDot;
