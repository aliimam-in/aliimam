/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Plus = React.forwardRef<SVGSVGElement, PlusProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5 12h14" />
  <path d="M12 5v14" />
    </svg>
  )
);
Plus.displayName = "Plus";
export const PlusMetadata = { id: "plus", baseId: "plus", variant: "default", name: "Plus", category: "math", tags: [], viewBox: "0 0 24 24" } as const;
export default Plus;
