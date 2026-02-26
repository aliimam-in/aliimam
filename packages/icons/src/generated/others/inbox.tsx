/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface InboxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Inbox = React.forwardRef<SVGSVGElement, InboxProps>(
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
);
Inbox.displayName = "Inbox";
export const InboxMetadata = { 
  id: "inbox", 
  baseId: "inbox", 
  variant: "default", 
  name: "Inbox", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Inbox;
