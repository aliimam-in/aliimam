/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ZoomFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ZoomFilled = React.forwardRef<SVGSVGElement, ZoomFilledProps>(
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
      <path d="M14 3.072a8 8 0 0 1 2.617 11.424l4.944 4.943a1.5 1.5 0 0 1 -2.008 2.225l-.114 -.103l-4.943 -4.944a8 8 0 0 1 -12.49 -6.332l-.006 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643z" />
    </svg>
  )
);
ZoomFilled.displayName = "ZoomFilled";
export const ZoomFilledMetadata = { 
  id: "zoom_filled", 
  baseId: "zoom", 
  variant: "filled", 
  name: "Zoom", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ZoomFilled;
