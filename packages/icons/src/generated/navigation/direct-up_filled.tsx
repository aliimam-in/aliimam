/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectUpFilled = React.forwardRef<SVGSVGElement, DirectUpFilledProps>(
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
      <path d="M17.02 21.2899L13.54 19.5499C12.57 19.0699 11.44 19.0699 10.47 19.5499L6.99003 21.2899C4.00003 22.7799 0.850035 19.5699 2.41003 16.6199L3.23003 15.0799C3.34003 14.8699 3.52003 14.6999 3.74003 14.5999L16.38 8.89993C16.9 8.66993 17.51 8.87993 17.77 9.37993L21.58 16.6199C23.14 19.5699 20 22.7799 17.02 21.2899Z" fill="currentColor"/>
<path d="M15.6 7.69002L7.31996 11.42C6.38996 11.84 5.44996 10.84 5.92996 9.94002L8.96996 4.17002C10.26 1.72002 13.76 1.72002 15.05 4.17002L16.12 6.21002C16.4 6.76002 16.16 7.44002 15.6 7.69002Z" fill="currentColor"/>
    </svg>
  )
);
DirectUpFilled.displayName = "DirectUpFilled";
export const DirectUpFilledMetadata = { 
  id: "direct-up_filled", 
  baseId: "direct-up", 
  variant: "filled", 
  name: "Direct Up", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectUpFilled;
