/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlaskRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlaskRound = React.forwardRef<SVGSVGElement, FlaskRoundProps>(
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
      <path d="M10 2v6.292a7 7 0 1 0 4 0V2" />
  <path d="M5 15h14" />
  <path d="M8.5 2h7" />
    </svg>
  )
);
FlaskRound.displayName = "FlaskRound";
export const FlaskRoundMetadata = { 
  id: "flask-round", 
  baseId: "flask-round", 
  variant: "default", 
  name: "Flask Round", 
  category: "medical", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlaskRound;
