/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Paperclip2RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Paperclip2Rounded = React.forwardRef<SVGSVGElement, Paperclip2RoundedProps>(
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
      <path d="M12.3299 12.15L9.85993 14.62C8.48993 15.99 8.48993 18.2 9.85993 19.57C11.2299 20.94 13.4399 20.94 14.8099 19.57L18.6999 15.68C21.4299 12.95 21.4299 8.51 18.6999 5.78C15.9699 3.05 11.5299 3.05 8.79993 5.78L4.55993 10.02C2.21993 12.36 2.21993 16.16 4.55993 18.51" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Paperclip2Rounded.displayName = "Paperclip2Rounded";
export const Paperclip2RoundedMetadata = { 
  id: "paperclip-2_rounded", 
  baseId: "paperclip-2", 
  variant: "rounded", 
  name: "Paperclip 2", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Paperclip2Rounded;
