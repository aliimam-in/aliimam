/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CubeScanRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CubeScanRounded = React.forwardRef<SVGSVGElement, CubeScanRoundedProps>(
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
      <path d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.69995 9.26001L12 12.33L17.2599 9.28003" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17.77V12.32" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.76 6.29L7.55998 8.07003C6.83998 8.47003 6.23999 9.48002 6.23999 10.31V13.7C6.23999 14.53 6.82998 15.54 7.55998 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.31C17.77 9.48002 17.18 8.47003 16.45 8.07003L13.25 6.29C12.56 5.9 11.44 5.9 10.76 6.29Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CubeScanRounded.displayName = "CubeScanRounded";
export const CubeScanRoundedMetadata = { 
  id: "cube-scan_rounded", 
  baseId: "cube-scan", 
  variant: "rounded", 
  name: "Cube Scan", 
  category: "commerce", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CubeScanRounded;
