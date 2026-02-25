/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RulerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ruler = React.forwardRef<SVGSVGElement, RulerProps>(
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
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
  <path d="m14.5 12.5 2-2" />
  <path d="m11.5 9.5 2-2" />
  <path d="m8.5 6.5 2-2" />
  <path d="m17.5 15.5 2-2" />
    </svg>
  )
);
Ruler.displayName = "Ruler";
export const RulerMetadata = { 
  id: "ruler", 
  baseId: "ruler", 
  variant: "default", 
  name: "Ruler", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Ruler;
