/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ContactRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ContactRound = React.forwardRef<SVGSVGElement, ContactRoundProps>(
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
  <path d="M17.915 22a6 6 0 0 0-12 0" />
  <path d="M8 2v2" />
  <circle cx="12" cy="12" r="4" />
  <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  )
);
ContactRound.displayName = "ContactRound";
export const ContactRoundMetadata = { 
  id: "contact-round", 
  baseId: "contact-round", 
  variant: "default", 
  name: "Contact Round", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ContactRound;
