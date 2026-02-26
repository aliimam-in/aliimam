/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MarsStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MarsStroke = React.forwardRef<SVGSVGElement, MarsStrokeProps>(
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
      <path d="m14 6 4 4" />
  <path d="M17 3h4v4" />
  <path d="m21 3-7.75 7.75" />
  <circle cx="9" cy="15" r="6" />
    </svg>
  )
);
MarsStroke.displayName = "MarsStroke";
export const MarsStrokeMetadata = { 
  id: "mars-stroke", 
  baseId: "mars-stroke", 
  variant: "default", 
  name: "Mars Stroke", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MarsStroke;
