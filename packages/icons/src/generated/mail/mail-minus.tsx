/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MailMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MailMinus = React.forwardRef<SVGSVGElement, MailMinusProps>(
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
      <path d="M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  <path d="M16 19h6" />
    </svg>
  )
);
MailMinus.displayName = "MailMinus";
export const MailMinusMetadata = { 
  id: "mail-minus", 
  baseId: "mail-minus", 
  variant: "default", 
  name: "Mail Minus", 
  category: "mail", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MailMinus;
