/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectDownFilled = React.forwardRef<SVGSVGElement, DirectDownFilledProps>(
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
      <path d="M17.02 2.71996L13.54 4.45996C12.57 4.93996 11.44 4.93996 10.47 4.45996L6.97997 2.70996C3.99997 1.21996 0.849974 4.43996 2.40997 7.38996L3.22997 8.92996C3.33997 9.13996 3.51997 9.30996 3.73997 9.40996L16.39 15.1C16.91 15.33 17.52 15.12 17.78 14.62L21.59 7.37996C23.14 4.43996 20 1.21996 17.02 2.71996Z" fill="currentColor"/>
<path d="M15.6 16.31L7.31996 12.58C6.38996 12.16 5.44996 13.16 5.92996 14.06L8.96996 19.83C10.26 22.28 13.76 22.28 15.05 19.83L16.12 17.79C16.4 17.24 16.16 16.57 15.6 16.31Z" fill="currentColor"/>
    </svg>
  )
);
DirectDownFilled.displayName = "DirectDownFilled";
export const DirectDownFilledMetadata = { 
  id: "direct-down_filled", 
  baseId: "direct-down", 
  variant: "filled", 
  name: "Direct Down", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectDownFilled;
