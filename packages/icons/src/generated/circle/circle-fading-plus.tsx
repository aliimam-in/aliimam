/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleFadingPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleFadingPlus = React.forwardRef<SVGSVGElement, CircleFadingPlusProps>(
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
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
  <path d="M12 8v8" />
  <path d="M16 12H8" />
  <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
  <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
  <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
  <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
    </svg>
  )
);
CircleFadingPlus.displayName = "CircleFadingPlus";
export const CircleFadingPlusMetadata = { 
  id: "circle-fading-plus", 
  baseId: "circle-fading-plus", 
  variant: "default", 
  name: "Circle Fading Plus", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleFadingPlus;
