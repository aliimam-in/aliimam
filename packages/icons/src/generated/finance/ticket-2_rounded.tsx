/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Ticket2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ticket2Rounded = React.forwardRef<SVGSVGElement, Ticket2RoundedProps>(
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
      <path d="M18.91 14.6925C18.91 15.9825 19.97 17.0325 21.26 17.0325C21.26 20.7825 20.32 21.7225 16.57 21.7225H7.19C3.44 21.7225 2.5 20.7825 2.5 17.0325V16.5725C3.79 16.5725 4.85 15.5125 4.85 14.2225C4.85 12.9325 3.79 11.8725 2.5 11.8725V11.4125C2.51 7.66247 3.44 6.72247 7.19 6.72247H16.56C20.31 6.72247 21.25 7.66247 21.25 11.4125V12.3525C19.96 12.3525 18.91 13.3925 18.91 14.6925Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.2111 6.7225H7.12109L10.0511 3.7925C12.4411 1.4025 13.6411 1.4025 16.0311 3.7925L16.6311 4.3925C16.0011 5.0225 15.8511 5.9525 16.2111 6.7225Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.87891 6.72266L9.87891 21.7227" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/>
    </svg>
  )
);
Ticket2Rounded.displayName = "Ticket2Rounded";
export const Ticket2RoundedMetadata = { 
  id: "ticket-2_rounded", 
  baseId: "ticket-2", 
  variant: "rounded", 
  name: "Ticket 2", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Ticket2Rounded;
