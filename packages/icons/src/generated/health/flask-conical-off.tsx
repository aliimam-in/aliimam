/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlaskConicalOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlaskConicalOff = React.forwardRef<SVGSVGElement, FlaskConicalOffProps>(
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
      <path d="M10 2v2.343" />
  <path d="M14 2v6.343" />
  <path d="m2 2 20 20" />
  <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" />
  <path d="M6.453 15H15" />
  <path d="M8.5 2h7" />
    </svg>
  )
);
FlaskConicalOff.displayName = "FlaskConicalOff";
export const FlaskConicalOffMetadata = { 
  id: "flask-conical-off", 
  baseId: "flask-conical-off", 
  variant: "default", 
  name: "Flask Conical Off", 
  category: "health", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlaskConicalOff;
