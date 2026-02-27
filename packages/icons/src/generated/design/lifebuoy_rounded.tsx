/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LifebuoyRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LifebuoyRounded = React.forwardRef<SVGSVGElement, LifebuoyRoundedProps>(
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
      <path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.90002 4.92999L8.44002 8.45999"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.90002 19.07L8.44002 15.54"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.05 19.07L15.51 15.54"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.05 4.92999L15.51 8.45999"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LifebuoyRounded.displayName = "LifebuoyRounded";
export const LifebuoyRoundedMetadata = { 
  id: "lifebuoy_rounded", 
  baseId: "lifebuoy", 
  variant: "rounded", 
  name: "Lifebuoy", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LifebuoyRounded;
