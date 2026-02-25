/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockArrowUp = React.forwardRef<SVGSVGElement, ClockArrowUpProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 6v6l1.56.78" />
  <path d="M13.227 21.925a10 10 0 1 1 8.767-9.588" />
  <path d="m14 18 4-4 4 4" />
  <path d="M18 22v-8" />
    </svg>
  )
);
ClockArrowUp.displayName = "ClockArrowUp";
export const ClockArrowUpMetadata = { id: "clock-arrow-up", baseId: "clock-arrow-up", variant: "default", name: "Clock Arrow Up", category: "clock", tags: [], viewBox: "0 0 24 24" } as const;
export default ClockArrowUp;
