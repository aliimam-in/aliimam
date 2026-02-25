/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CylinderProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cylinder = React.forwardRef<SVGSVGElement, CylinderProps>(
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    </svg>
  )
);
Cylinder.displayName = "Cylinder";
export const CylinderMetadata = { 
  id: "cylinder", 
  baseId: "cylinder", 
  variant: "default", 
  name: "Cylinder", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Cylinder;
