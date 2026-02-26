/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RectangleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RectangleFilled = React.forwardRef<SVGSVGElement, RectangleFilledProps>(
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
      <path d="M19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
    </svg>
  )
);
RectangleFilled.displayName = "RectangleFilled";
export const RectangleFilledMetadata = { 
  id: "rectangle_filled", 
  baseId: "rectangle", 
  variant: "filled", 
  name: "Rectangle", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RectangleFilled;
