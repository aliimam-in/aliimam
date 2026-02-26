/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CaptionsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Captions = React.forwardRef<SVGSVGElement, CaptionsProps>(
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
      <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
  <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
    </svg>
  )
);
Captions.displayName = "Captions";
export const CaptionsMetadata = { 
  id: "captions", 
  baseId: "captions", 
  variant: "default", 
  name: "Captions", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Captions;
