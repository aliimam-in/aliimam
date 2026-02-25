/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StretchVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StretchVertical = React.forwardRef<SVGSVGElement, StretchVerticalProps>(
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
      <rect width="6" height="20" x="4" y="2" rx="2" />
  <rect width="6" height="20" x="14" y="2" rx="2" />
    </svg>
  )
);
StretchVertical.displayName = "StretchVertical";
export const StretchVerticalMetadata = { 
  id: "stretch-vertical", 
  baseId: "stretch-vertical", 
  variant: "default", 
  name: "Stretch Vertical", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StretchVertical;
