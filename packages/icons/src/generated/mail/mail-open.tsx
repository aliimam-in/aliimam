/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MailOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MailOpen = React.forwardRef<SVGSVGElement, MailOpenProps>(
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
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
);
MailOpen.displayName = "MailOpen";
export const MailOpenMetadata = { 
  id: "mail-open", 
  baseId: "mail-open", 
  variant: "default", 
  name: "Mail Open", 
  category: "mail", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MailOpen;
