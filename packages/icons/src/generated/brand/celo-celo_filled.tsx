/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CeloCeloFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CeloCeloFilled = React.forwardRef<SVGSVGElement, CeloCeloFilledProps>(
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
      <path d="M9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z" fill="currentColor"/>
<path d="M22.0001 9C22.0001 11.74 20.4301 14.11 18.1401 15.25C17.8301 15.41 17.4801 15.16 17.4501 14.82C17.1101 10.37 13.6001 6.89 9.18007 6.55C8.83007 6.52 8.59008 6.17 8.75008 5.86C9.89008 3.57 12.2601 2 15.0001 2C18.8701 2 22.0001 5.13 22.0001 9Z" fill="currentColor"/>
    </svg>
  )
);
CeloCeloFilled.displayName = "CeloCeloFilled";
export const CeloCeloFilledMetadata = { 
  id: "celo-celo_filled", 
  baseId: "celo-celo", 
  variant: "filled", 
  name: "Celo Celo", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CeloCeloFilled;
