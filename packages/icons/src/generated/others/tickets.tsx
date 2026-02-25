/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TicketsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tickets = React.forwardRef<SVGSVGElement, TicketsProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" />
  <path d="M6 10V8" />
  <path d="M6 14v1" />
  <path d="M6 19v2" />
  <rect x="2" y="8" width="20" height="13" rx="2" />
    </svg>
  )
);
Tickets.displayName = "Tickets";
export const TicketsMetadata = { id: "tickets", baseId: "tickets", variant: "default", name: "Tickets", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default Tickets;
