/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Clock3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Clock3 = React.forwardRef<SVGSVGElement, Clock3Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6h4" />
    </svg>
  )
);
Clock3.displayName = "Clock3";
export const Clock3Metadata = { id: "clock-3", baseId: "clock-3", variant: "default", name: "Clock 3", category: "clock", tags: [], viewBox: "0 0 24 24" } as const;
export default Clock3;
