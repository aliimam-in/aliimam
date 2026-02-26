/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GripVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GripVertical = React.forwardRef<SVGSVGElement, GripVerticalProps>(
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
      <circle cx="9" cy="12" r="1" />
  <circle cx="9" cy="5" r="1" />
  <circle cx="9" cy="19" r="1" />
  <circle cx="15" cy="12" r="1" />
  <circle cx="15" cy="5" r="1" />
  <circle cx="15" cy="19" r="1" />
    </svg>
  )
);
GripVertical.displayName = "GripVertical";
export const GripVerticalMetadata = { 
  id: "grip-vertical", 
  baseId: "grip-vertical", 
  variant: "default", 
  name: "Grip Vertical", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GripVertical;
