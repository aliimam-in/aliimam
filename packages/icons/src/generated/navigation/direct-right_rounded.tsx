/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectRightRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectRightRounded = React.forwardRef<SVGSVGElement, DirectRightRoundedProps>(
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
      <path d="M19.29 9.16999L7.70002 3.06999C4.95002 1.61999 1.96002 4.54999 3.35002 7.32999L4.97002 10.57C5.42002 11.47 5.42002 12.53 4.97002 13.43L3.35002 16.67C1.96002 19.45 4.95002 22.37 7.70002 20.93L19.29 14.83C21.57 13.63 21.57 10.37 19.29 9.16999Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DirectRightRounded.displayName = "DirectRightRounded";
export const DirectRightRoundedMetadata = { 
  id: "direct-right_rounded", 
  baseId: "direct-right", 
  variant: "rounded", 
  name: "Direct Right", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectRightRounded;
