/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RectangleGogglesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RectangleGoggles = React.forwardRef<SVGSVGElement, RectangleGogglesProps>(
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
      <path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    </svg>
  )
);
RectangleGoggles.displayName = "RectangleGoggles";
export const RectangleGogglesMetadata = { 
  id: "rectangle-goggles", 
  baseId: "rectangle-goggles", 
  variant: "default", 
  name: "Rectangle Goggles", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RectangleGoggles;
