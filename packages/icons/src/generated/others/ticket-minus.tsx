/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TicketMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TicketMinus = React.forwardRef<SVGSVGElement, TicketMinusProps>(
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
  <path d="M9 12h6" />
    </svg>
  )
);
TicketMinus.displayName = "TicketMinus";
export const TicketMinusMetadata = { 
  id: "ticket-minus", 
  baseId: "ticket-minus", 
  variant: "default", 
  name: "Ticket Minus", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TicketMinus;
