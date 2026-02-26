/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BinaryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Binary = React.forwardRef<SVGSVGElement, BinaryProps>(
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
      <rect x="14" y="14" width="4" height="6" rx="2" />
  <rect x="6" y="4" width="4" height="6" rx="2" />
  <path d="M6 20h4" />
  <path d="M14 10h4" />
  <path d="M6 14h2v6" />
  <path d="M14 4h2v6" />
    </svg>
  )
);
Binary.displayName = "Binary";
export const BinaryMetadata = { 
  id: "binary", 
  baseId: "binary", 
  variant: "default", 
  name: "Binary", 
  category: "math", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Binary;
