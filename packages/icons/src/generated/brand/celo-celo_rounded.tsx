/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CeloCeloRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CeloCeloRounded = React.forwardRef<SVGSVGElement, CeloCeloRoundedProps>(
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
      <path d="M15 16C18.866 16 22 12.866 22 9C22 5.13401 18.866 2 15 2C11.134 2 8 5.13401 8 9C8 12.866 11.134 16 15 16Z"   strokeMiterlimit="10"/>
<path d="M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z"   strokeMiterlimit="10"/>
    </svg>
  )
);
CeloCeloRounded.displayName = "CeloCeloRounded";
export const CeloCeloRoundedMetadata = { 
  id: "celo-celo_rounded", 
  baseId: "celo-celo", 
  variant: "rounded", 
  name: "Celo Celo", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CeloCeloRounded;
