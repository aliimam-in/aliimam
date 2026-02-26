/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RectangleVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RectangleVertical = React.forwardRef<SVGSVGElement, RectangleVerticalProps>(
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
      <rect width="12" height="20" x="6" y="2" rx="2" />
    </svg>
  )
);
RectangleVertical.displayName = "RectangleVertical";
export const RectangleVerticalMetadata = { 
  id: "rectangle-vertical", 
  baseId: "rectangle-vertical", 
  variant: "default", 
  name: "Rectangle Vertical", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RectangleVertical;
