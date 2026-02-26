/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookAlert = React.forwardRef<SVGSVGElement, BookAlertProps>(
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
      <path d="M12 13h.01" />
  <path d="M12 6v3" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </svg>
  )
);
BookAlert.displayName = "BookAlert";
export const BookAlertMetadata = { 
  id: "book-alert", 
  baseId: "book-alert", 
  variant: "default", 
  name: "Book Alert", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BookAlert;
