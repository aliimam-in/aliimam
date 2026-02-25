/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TicketXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TicketX = React.forwardRef<SVGSVGElement, TicketXProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
  <path d="m9.5 14.5 5-5" />
  <path d="m9.5 9.5 5 5" />
    </svg>
  )
);
TicketX.displayName = "TicketX";
export const TicketXMetadata = { id: "ticket-x", baseId: "ticket-x", variant: "default", name: "Ticket X", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default TicketX;
