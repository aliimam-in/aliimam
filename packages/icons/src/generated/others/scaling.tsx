/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScalingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Scaling = React.forwardRef<SVGSVGElement, ScalingProps>(
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
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M14 15H9v-5" />
  <path d="M16 3h5v5" />
  <path d="M21 3 9 15" />
    </svg>
  )
);
Scaling.displayName = "Scaling";
export const ScalingMetadata = { 
  id: "scaling", 
  baseId: "scaling", 
  variant: "default", 
  name: "Scaling", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Scaling;
