/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MailsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mails = React.forwardRef<SVGSVGElement, MailsProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" />
  <path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" />
  <rect x="7" y="3" width="15" height="12" rx="2" />
    </svg>
  )
);
Mails.displayName = "Mails";
export const MailsMetadata = { id: "mails", baseId: "mails", variant: "default", name: "Mails", category: "mail", tags: [], viewBox: "0 0 24 24" } as const;
export default Mails;
