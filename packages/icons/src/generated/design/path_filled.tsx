/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PathFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PathFilled = React.forwardRef<SVGSVGElement, PathFilledProps>(
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
      <path d="M20.02 10.6999L17.9 12.0399C17.5 12.2899 16.99 12.2299 16.66 11.8999L12.13 7.36992C11.8 7.03992 11.74 6.52992 11.99 6.12992L13.33 4.00992C14.15 2.71992 15.79 2.65992 17 3.85992L20.18 7.03992C21.3 8.16992 21.23 9.92992 20.02 10.6999Z" fill="currentColor"/>
<path d="M14.71 19.95L5.99003 20.97C5.91235 20.9804 5.83568 20.9877 5.76008 20.9921C5.07495 21.0325 4.90508 20.2249 5.39038 19.7396L7.98003 17.15C8.30003 16.84 8.30003 16.35 7.98003 16.04C7.68003 15.73 7.19003 15.73 6.87003 16.04L4.28038 18.6296C3.79508 19.1149 2.99495 18.9444 3.03136 18.259C3.03518 18.1871 3.04138 18.1141 3.05003 18.04L4.08003 9.32C4.34003 7.14 5.14003 6.42 7.44003 6.56L8.94003 6.65C9.43003 6.68 9.89003 6.89 10.24 7.24L16.79 13.79C17.14 14.14 17.35 14.6 17.37 15.09L17.46 16.59C17.69 18.9 16.9 19.7 14.71 19.95Z" fill="currentColor"/>
    </svg>
  )
);
PathFilled.displayName = "PathFilled";
export const PathFilledMetadata = { 
  id: "path_filled", 
  baseId: "path", 
  variant: "filled", 
  name: "Path", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PathFilled;
