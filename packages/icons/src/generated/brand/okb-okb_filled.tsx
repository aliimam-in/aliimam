/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OkbOkbFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OkbOkbFilled = React.forwardRef<SVGSVGElement, OkbOkbFilledProps>(
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
      <path d="M17 7C17 9.76 14.76 12 12 12C14.76 12 17 14.24 17 17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z" fill="currentColor"/>
<path d="M12 12C12 14.76 9.76 17 7 17C7 19.76 9.24 22 12 22C14.76 22 17 19.76 17 17C14.24 17 12 14.76 12 12Z" fill="currentColor"/>
<path d="M12 12C12 9.24 14.24 7 17 7C17 4.24 14.76 2 12 2C9.24 2 7 4.24 7 7C9.76 7 12 9.24 12 12Z" fill="currentColor"/>
<path d="M12 12C9.24 12 7 9.76 7 7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17C7 14.24 9.24 12 12 12Z" fill="currentColor"/>
    </svg>
  )
);
OkbOkbFilled.displayName = "OkbOkbFilled";
export const OkbOkbFilledMetadata = { 
  id: "okb-okb_filled", 
  baseId: "okb-okb", 
  variant: "filled", 
  name: "Okb Okb", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default OkbOkbFilled;
