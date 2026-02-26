/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ExplicitFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ExplicitFilled = React.forwardRef<SVGSVGElement, ExplicitFilledProps>(
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
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2zm-5 4h-4a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-3v-2h3a1 1 0 0 0 0 -2h-3v-2h3a1 1 0 0 0 0 -2" />
    </svg>
  )
);
ExplicitFilled.displayName = "ExplicitFilled";
export const ExplicitFilledMetadata = { 
  id: "explicit_filled", 
  baseId: "explicit", 
  variant: "filled", 
  name: "Explicit", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ExplicitFilled;
