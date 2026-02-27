/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArchiveMinusRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArchiveMinusRounded = React.forwardRef<SVGSVGElement, ArchiveMinusRoundedProps>(
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
      <path d="M14.5 10.65H9.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ArchiveMinusRounded.displayName = "ArchiveMinusRounded";
export const ArchiveMinusRoundedMetadata = { 
  id: "archive-minus_rounded", 
  baseId: "archive-minus", 
  variant: "rounded", 
  name: "Archive Minus", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArchiveMinusRounded;
