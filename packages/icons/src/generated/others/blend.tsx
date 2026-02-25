/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BlendProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Blend = React.forwardRef<SVGSVGElement, BlendProps>(
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
      <circle cx="9" cy="9" r="7" />
  <circle cx="15" cy="15" r="7" />
    </svg>
  )
);
Blend.displayName = "Blend";
export const BlendMetadata = { 
  id: "blend", 
  baseId: "blend", 
  variant: "default", 
  name: "Blend", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Blend;
