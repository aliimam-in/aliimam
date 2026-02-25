/**
 * Auto-generated logo component: Ticket Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TicketOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TicketOutlineLogo = React.forwardRef<SVGSVGElement, TicketOutlineLogoProps>(
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
      <path d="M15 5l0 2" />
  <path d="M15 11l0 2" />
  <path d="M15 17l0 2" />
  <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
    </svg>
  )
);

TicketOutlineLogo.displayName = "TicketOutlineLogo";

export const TicketOutlineLogoMetadata = {
  id: "ticket-outline",
  baseId: "ticket-outline",
  variant: "default",
  name: "Ticket Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TicketOutlineLogo;
