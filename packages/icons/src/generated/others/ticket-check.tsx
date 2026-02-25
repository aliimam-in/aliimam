/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TicketCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TicketCheck = React.forwardRef<SVGSVGElement, TicketCheckProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
  <path d="m9 12 2 2 4-4" />
    </svg>
  )
);
TicketCheck.displayName = "TicketCheck";
export const TicketCheckMetadata = { 
  id: "ticket-check", 
  baseId: "ticket-check", 
  variant: "default", 
  name: "Ticket Check", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TicketCheck;
