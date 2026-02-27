/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PaperclipRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaperclipRounded = React.forwardRef<SVGSVGElement, PaperclipRoundedProps>(
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
      <path d="M11.97 12V15.5C11.97 17.43 13.54 19 15.47 19C17.4 19 18.97 17.43 18.97 15.5V10C18.97 6.13 15.84 3 11.97 3C8.09997 3 4.96997 6.13 4.96997 10V16C4.96997 19.31 7.65997 22 10.97 22"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PaperclipRounded.displayName = "PaperclipRounded";
export const PaperclipRoundedMetadata = { 
  id: "paperclip_rounded", 
  baseId: "paperclip", 
  variant: "rounded", 
  name: "Paperclip", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PaperclipRounded;
