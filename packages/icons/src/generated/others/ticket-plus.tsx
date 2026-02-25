/**
 * Auto-generated logo component: Ticket Plus (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TicketPlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TicketPlusLogo = React.forwardRef<SVGSVGElement, TicketPlusLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
  <path d="M9 12h6" />
  <path d="M12 9v6" />
    </svg>
  )
);

TicketPlusLogo.displayName = "TicketPlusLogo";

export const TicketPlusLogoMetadata = {
  id: "ticket-plus",
  baseId: "ticket-plus",
  variant: "default",
  name: "Ticket Plus",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TicketPlusLogo;
