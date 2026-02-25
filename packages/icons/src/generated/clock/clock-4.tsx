/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Clock4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Clock4 = React.forwardRef<SVGSVGElement, Clock4Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />
    </svg>
  )
);
Clock4.displayName = "Clock4";
export const Clock4Metadata = { id: "clock-4", baseId: "clock-4", variant: "default", name: "Clock 4", category: "clock", tags: [], viewBox: "0 0 24 24" } as const;
export default Clock4;
