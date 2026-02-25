/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HandbagProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Handbag = React.forwardRef<SVGSVGElement, HandbagProps>(
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
      <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
  <path d="M8 11V6a4 4 0 0 1 8 0v5" />
    </svg>
  )
);
Handbag.displayName = "Handbag";
export const HandbagMetadata = { 
  id: "handbag", 
  baseId: "handbag", 
  variant: "default", 
  name: "Handbag", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Handbag;
