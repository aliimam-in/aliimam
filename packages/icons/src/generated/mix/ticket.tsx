/**
 * Auto-generated logo component: Ticket (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TicketLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TicketLogo = React.forwardRef<SVGSVGElement, TicketLogoProps>(
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
  <path d="M13 5v2" />
  <path d="M13 17v2" />
  <path d="M13 11v2" />
    </svg>
  )
);

TicketLogo.displayName = "TicketLogo";

export const TicketLogoMetadata = {
  id: "ticket",
  baseId: "ticket",
  variant: "default",
  name: "Ticket",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TicketLogo;
