/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlaskFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlaskFilled = React.forwardRef<SVGSVGElement, FlaskFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M15 2a1 1 0 0 1 0 2v4.826l3.932 10.814l.034 .077a1.7 1.7 0 0 1 -.002 1.193l-.07 .162a1.7 1.7 0 0 1 -1.213 .911l-.181 .017h-11l-.181 -.017a1.7 1.7 0 0 1 -1.285 -2.266l.039 -.09l3.927 -10.804v-4.823a1 1 0 1 1 0 -2h6zm-2 2h-2v4h2v-4z" />
    </svg>
  )
);
FlaskFilled.displayName = "FlaskFilled";
export const FlaskFilledMetadata = { 
  id: "flask_filled", 
  baseId: "flask", 
  variant: "filled", 
  name: "Flask", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlaskFilled;
