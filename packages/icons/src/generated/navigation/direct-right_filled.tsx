/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectRightFilled = React.forwardRef<SVGSVGElement, DirectRightFilledProps>(
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
      <path d="M2.70996 17.02L4.44996 13.54C4.92996 12.57 4.92996 11.44 4.44996 10.47L2.70996 6.97997C1.21996 3.99997 4.42996 0.849974 7.37996 2.40997L8.91996 3.22997C9.13996 3.33997 9.30996 3.51997 9.39996 3.73997L15.09 16.39C15.32 16.91 15.11 17.52 14.61 17.78L7.36996 21.59C4.42996 23.15 1.21996 20 2.70996 17.02Z" fill="currentColor"/>
<path d="M16.31 15.6L12.58 7.31996C12.16 6.38996 13.16 5.44996 14.06 5.92996L19.83 8.96996C22.28 10.26 22.28 13.76 19.83 15.05L17.79 16.12C17.24 16.4 16.57 16.17 16.31 15.6Z" fill="currentColor"/>
    </svg>
  )
);
DirectRightFilled.displayName = "DirectRightFilled";
export const DirectRightFilledMetadata = { 
  id: "direct-right_filled", 
  baseId: "direct-right", 
  variant: "filled", 
  name: "Direct Right", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectRightFilled;
