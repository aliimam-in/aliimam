/**
 * Auto-generated logo component: Ticket Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TicketOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TicketOffOutlineLogo = React.forwardRef<SVGSVGElement, TicketOffOutlineLogoProps>(
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
      <path d="M15 5v2" />
  <path d="M15 17v2" />
  <path d="M9 5h10a2 2 0 0 1 2 2v3a2 2 0 1 0 0 4v3m-2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 1 0 0 -4v-3a2 2 0 0 1 2 -2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TicketOffOutlineLogo.displayName = "TicketOffOutlineLogo";

export const TicketOffOutlineLogoMetadata = {
  id: "ticket-off-outline",
  baseId: "ticket-off-outline",
  variant: "default",
  name: "Ticket Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TicketOffOutlineLogo;
