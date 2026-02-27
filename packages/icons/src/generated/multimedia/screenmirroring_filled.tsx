/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScreenmirroringFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScreenmirroringFilled = React.forwardRef<SVGSVGElement, ScreenmirroringFilledProps>(
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
      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.5 16.4C18.5 17.9 17.9 18.5 16.4 18.5H12.6C11.1 18.5 10.5 17.9 10.5 16.4V14.6C10.5 13.1 11.1 12.5 12.6 12.5H16.4C17.9 12.5 18.5 13.1 18.5 14.6V16.4Z" fill="currentColor"/>
    </svg>
  )
);
ScreenmirroringFilled.displayName = "ScreenmirroringFilled";
export const ScreenmirroringFilledMetadata = { 
  id: "screenmirroring_filled", 
  baseId: "screenmirroring", 
  variant: "filled", 
  name: "Screenmirroring", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ScreenmirroringFilled;
