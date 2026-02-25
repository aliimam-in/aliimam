/**
 * Auto-generated logo component: Dotenvx (default)
 * Category: devtool
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DotenvxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Dotenvx = React.forwardRef<SVGSVGElement, DotenvxProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2066_384)">
<path d="M24 0H0V24H24V0Z" fill="#ECD53F"/>
<path d="M24 0V24H0V0H24ZM10.933 15.89H6.84V21.41H11.038V20.48H7.955V18.977H10.725V18.047H7.955V16.823H10.933V15.889V15.89ZM13.079 15.89H11.995V21.41H13.03V17.81L15.256 21.41H16.374V15.89H15.338V19.576L13.079 15.889V15.89ZM18.196 15.89H16.988L18.961 21.41H20.151L22.127 15.89H20.945L19.593 19.975L18.196 15.889V15.89ZM5.4 19.68H3.72V21.36H5.4V19.68Z" fill="#09090B"/>
</g>
<defs>
<clipPath id="clip0_2066_384">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Dotenvx.displayName = "Dotenvx";

export const DotenvxMetadata = {
  id: "Dotenvx",
  baseId: "Dotenvx",
  variant: "default",
  name: "Dotenvx",
  category: "devtool",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Dotenvx;
