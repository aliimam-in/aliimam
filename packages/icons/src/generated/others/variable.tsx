/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VariableProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Variable = React.forwardRef<SVGSVGElement, VariableProps>(
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
      <path d="M8 21s-4-3-4-9 4-9 4-9" />
  <path d="M16 3s4 3 4 9-4 9-4 9" />
  <line x1="15" x2="9" y1="9" y2="15" />
  <line x1="9" x2="15" y1="9" y2="15" />
    </svg>
  )
);
Variable.displayName = "Variable";
export const VariableMetadata = { 
  id: "variable", 
  baseId: "variable", 
  variant: "default", 
  name: "Variable", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Variable;
