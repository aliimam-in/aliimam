/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectLeftRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectLeftRounded = React.forwardRef<SVGSVGElement, DirectLeftRoundedProps>(
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
      <path d="M4.71 9.16999L16.3 3.06999C19.05 1.61999 22.04 4.54999 20.65 7.32999L19.03 10.57C18.58 11.47 18.58 12.53 19.03 13.43L20.65 16.67C22.04 19.45 19.05 22.37 16.3 20.93L4.71 14.83C2.43 13.63 2.43 10.37 4.71 9.16999Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DirectLeftRounded.displayName = "DirectLeftRounded";
export const DirectLeftRoundedMetadata = { 
  id: "direct-left_rounded", 
  baseId: "direct-left", 
  variant: "rounded", 
  name: "Direct Left", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectLeftRounded;
