/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PaintbrushVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaintbrushVertical = React.forwardRef<SVGSVGElement, PaintbrushVerticalProps>(
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
      <path d="M10 2v2" />
  <path d="M14 2v4" />
  <path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" />
  <path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" />
    </svg>
  )
);
PaintbrushVertical.displayName = "PaintbrushVertical";
export const PaintbrushVerticalMetadata = { 
  id: "paintbrush-vertical", 
  baseId: "paintbrush-vertical", 
  variant: "default", 
  name: "Paintbrush Vertical", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PaintbrushVertical;
