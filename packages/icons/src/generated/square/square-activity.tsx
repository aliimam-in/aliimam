/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareActivityProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareActivity = React.forwardRef<SVGSVGElement, SquareActivityProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M17 12h-2l-2 5-2-10-2 5H7" />
    </svg>
  )
);
SquareActivity.displayName = "SquareActivity";
export const SquareActivityMetadata = { id: "square-activity", baseId: "square-activity", variant: "default", name: "Square Activity", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareActivity;
