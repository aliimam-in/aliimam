/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ParenthesesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Parentheses = React.forwardRef<SVGSVGElement, ParenthesesProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M8 21s-4-3-4-9 4-9 4-9" />
  <path d="M16 3s4 3 4 9-4 9-4 9" />
    </svg>
  )
);
Parentheses.displayName = "Parentheses";
export const ParenthesesMetadata = { id: "parentheses", baseId: "parentheses", variant: "default", name: "Parentheses", category: "math", tags: [], viewBox: "0 0 24 24" } as const;
export default Parentheses;
