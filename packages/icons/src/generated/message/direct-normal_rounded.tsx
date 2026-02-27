/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectNormalRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectNormalRounded = React.forwardRef<SVGSVGElement, DirectNormalRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DirectNormalRounded.displayName = "DirectNormalRounded";
export const DirectNormalRoundedMetadata = { 
  id: "direct-normal_rounded", 
  baseId: "direct-normal", 
  variant: "rounded", 
  name: "Direct Normal", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectNormalRounded;
