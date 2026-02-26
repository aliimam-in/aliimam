/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SpaceProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Space = React.forwardRef<SVGSVGElement, SpaceProps>(
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
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </svg>
  )
);
Space.displayName = "Space";
export const SpaceMetadata = { 
  id: "space", 
  baseId: "space", 
  variant: "default", 
  name: "Space", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Space;
