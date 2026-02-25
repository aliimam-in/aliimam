/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ContactProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Contact = React.forwardRef<SVGSVGElement, ContactProps>(
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
      <path d="M16 2v2" />
  <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
  <path d="M8 2v2" />
  <circle cx="12" cy="11" r="3" />
  <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  )
);
Contact.displayName = "Contact";
export const ContactMetadata = { 
  id: "contact", 
  baseId: "contact", 
  variant: "default", 
  name: "Contact", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Contact;
