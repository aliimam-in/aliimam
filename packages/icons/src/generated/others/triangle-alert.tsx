/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TriangleAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TriangleAlert = React.forwardRef<SVGSVGElement, TriangleAlertProps>(
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
    </svg>
  )
);
TriangleAlert.displayName = "TriangleAlert";
export const TriangleAlertMetadata = { 
  id: "triangle-alert", 
  baseId: "triangle-alert", 
  variant: "default", 
  name: "Triangle Alert", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TriangleAlert;
