/**
 * Auto-generated logo component: Ticket Percent (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TicketPercentLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TicketPercentLogo = React.forwardRef<SVGSVGElement, TicketPercentLogoProps>(
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
      <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
  <path d="M9 9h.01" />
  <path d="m15 9-6 6" />
  <path d="M15 15h.01" />
    </svg>
  )
);

TicketPercentLogo.displayName = "TicketPercentLogo";

export const TicketPercentLogoMetadata = {
  id: "ticket-percent",
  baseId: "ticket-percent",
  variant: "default",
  name: "Ticket Percent",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TicketPercentLogo;
