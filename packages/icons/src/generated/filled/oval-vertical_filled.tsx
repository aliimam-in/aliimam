/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OvalVerticalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OvalVerticalFilled = React.forwardRef<SVGSVGElement, OvalVerticalFilledProps>(
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
      <path d="M12 5c-5.457 0 -10 3.028 -10 7s4.543 7 10 7s10 -3.028 10 -7s-4.543 -7 -10 -7z" />
    </svg>
  )
);
OvalVerticalFilled.displayName = "OvalVerticalFilled";
export const OvalVerticalFilledMetadata = { 
  id: "oval-vertical_filled", 
  baseId: "oval-vertical", 
  variant: "filled", 
  name: "Oval Vertical", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default OvalVerticalFilled;
