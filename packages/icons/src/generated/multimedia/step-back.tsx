/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StepBackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StepBack = React.forwardRef<SVGSVGElement, StepBackProps>(
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
      <path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
  <path d="M21 20V4" />
    </svg>
  )
);
StepBack.displayName = "StepBack";
export const StepBackMetadata = { 
  id: "step-back", 
  baseId: "step-back", 
  variant: "default", 
  name: "Step Back", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StepBack;
