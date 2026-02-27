/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TicketDiscountRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TicketDiscountRounded = React.forwardRef<SVGSVGElement, TicketDiscountRoundedProps>(
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
      <path d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14.75L15 8.75"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9945 14.75H15.0035"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.99451 9.25H9.00349"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TicketDiscountRounded.displayName = "TicketDiscountRounded";
export const TicketDiscountRoundedMetadata = { 
  id: "ticket-discount_rounded", 
  baseId: "ticket-discount", 
  variant: "rounded", 
  name: "Ticket Discount", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TicketDiscountRounded;
