/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RefrigeratorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Refrigerator = React.forwardRef<SVGSVGElement, RefrigeratorProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
  <path d="M5 10h14" />
  <path d="M15 7v6" />
    </svg>
  )
);
Refrigerator.displayName = "Refrigerator";
export const RefrigeratorMetadata = { id: "refrigerator", baseId: "refrigerator", variant: "default", name: "Refrigerator", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Refrigerator;
