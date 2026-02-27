/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectUpRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectUpRounded = React.forwardRef<SVGSVGElement, DirectUpRoundedProps>(
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
      <path d="M9.17005 4.71L3.07005 16.3C1.62005 19.05 4.55005 22.04 7.33005 20.65L10.57 19.03C11.47 18.58 12.53 18.58 13.43 19.03L16.67 20.65C19.45 22.04 22.37 19.05 20.93 16.3L14.83 4.71C13.63 2.43 10.37 2.43 9.17005 4.71Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DirectUpRounded.displayName = "DirectUpRounded";
export const DirectUpRoundedMetadata = { 
  id: "direct-up_rounded", 
  baseId: "direct-up", 
  variant: "rounded", 
  name: "Direct Up", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectUpRounded;
