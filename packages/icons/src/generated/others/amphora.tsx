/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AmphoraProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Amphora = React.forwardRef<SVGSVGElement, AmphoraProps>(
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
      <path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" />
  <path d="M10 5H8a2 2 0 0 0 0 4h.68" />
  <path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" />
  <path d="M14 5h2a2 2 0 0 1 0 4h-.68" />
  <path d="M18 22H6" />
  <path d="M9 2h6" />
    </svg>
  )
);
Amphora.displayName = "Amphora";
export const AmphoraMetadata = { 
  id: "amphora", 
  baseId: "amphora", 
  variant: "default", 
  name: "Amphora", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Amphora;
