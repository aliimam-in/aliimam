/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CopyrightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Copyright = React.forwardRef<SVGSVGElement, CopyrightProps>(
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
  <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
    </svg>
  )
);
Copyright.displayName = "Copyright";
export const CopyrightMetadata = { 
  id: "copyright", 
  baseId: "copyright", 
  variant: "default", 
  name: "Copyright", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Copyright;
