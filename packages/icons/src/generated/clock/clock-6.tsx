/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Clock6Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Clock6 = React.forwardRef<SVGSVGElement, Clock6Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="M12 6v10" />
    </svg>
  )
);
Clock6.displayName = "Clock6";
export const Clock6Metadata = { id: "clock-6", baseId: "clock-6", variant: "default", name: "Clock 6", category: "clock", tags: [], viewBox: "0 0 24 24" } as const;
export default Clock6;
