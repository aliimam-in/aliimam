/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Contrast = React.forwardRef<SVGSVGElement, ContrastProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M12 18a6 6 0 0 0 0-12v12z" />
    </svg>
  )
);
Contrast.displayName = "Contrast";
export const ContrastMetadata = { 
  id: "contrast", 
  baseId: "contrast", 
  variant: "default", 
  name: "Contrast", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Contrast;
