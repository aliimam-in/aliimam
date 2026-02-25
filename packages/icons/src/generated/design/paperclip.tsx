/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PaperclipProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Paperclip = React.forwardRef<SVGSVGElement, PaperclipProps>(
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
      <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
    </svg>
  )
);
Paperclip.displayName = "Paperclip";
export const PaperclipMetadata = { 
  id: "paperclip", 
  baseId: "paperclip", 
  variant: "default", 
  name: "Paperclip", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Paperclip;
