/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CopyrightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CopyrightFilled = React.forwardRef<SVGSVGElement, CopyrightFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12.24 15.25C13.02 15.25 13.79 14.96 14.38 14.44C14.69 14.17 15.17 14.2 15.44 14.51C15.71 14.82 15.68 15.3 15.37 15.57C14.5 16.34 13.39 16.76 12.24 16.76C9.62 16.76 7.49 14.63 7.49 12.01C7.49 9.39 9.62 7.26 12.24 7.26C13.39 7.26 14.51 7.68 15.37 8.45C15.68 8.72 15.71 9.2 15.44 9.51C15.16 9.82 14.69 9.85 14.38 9.58C13.79 9.06 13.03 8.77 12.24 8.77C10.45 8.77 8.99 10.23 8.99 12.02C8.99 13.81 10.45 15.25 12.24 15.25Z" fill="currentColor"/>
    </svg>
  )
);
CopyrightFilled.displayName = "CopyrightFilled";
export const CopyrightFilledMetadata = { 
  id: "copyright_filled", 
  baseId: "copyright", 
  variant: "filled", 
  name: "Copyright", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CopyrightFilled;
