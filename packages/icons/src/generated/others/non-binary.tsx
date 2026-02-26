/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NonBinaryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NonBinary = React.forwardRef<SVGSVGElement, NonBinaryProps>(
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
      <path d="M12 2v10" />
  <path d="m8.5 4 7 4" />
  <path d="m8.5 8 7-4" />
  <circle cx="12" cy="17" r="5" />
    </svg>
  )
);
NonBinary.displayName = "NonBinary";
export const NonBinaryMetadata = { 
  id: "non-binary", 
  baseId: "non-binary", 
  variant: "default", 
  name: "Non Binary", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NonBinary;
