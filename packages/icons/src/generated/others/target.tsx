/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TargetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Target = React.forwardRef<SVGSVGElement, TargetProps>(
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
      <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="6" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);
Target.displayName = "Target";
export const TargetMetadata = { 
  id: "target", 
  baseId: "target", 
  variant: "default", 
  name: "Target", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Target;
