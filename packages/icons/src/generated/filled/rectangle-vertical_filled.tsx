/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RectangleVerticalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RectangleVerticalFilled = React.forwardRef<SVGSVGElement, RectangleVerticalFilledProps>(
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
      <path d="M17 2h-10a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" />
    </svg>
  )
);
RectangleVerticalFilled.displayName = "RectangleVerticalFilled";
export const RectangleVerticalFilledMetadata = { 
  id: "rectangle-vertical_filled", 
  baseId: "rectangle-vertical", 
  variant: "filled", 
  name: "Rectangle Vertical", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RectangleVerticalFilled;
