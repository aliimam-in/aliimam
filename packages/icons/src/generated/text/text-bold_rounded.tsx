/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextBoldRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextBoldRounded = React.forwardRef<SVGSVGElement, TextBoldRoundedProps>(
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
      <path d="M4.87988 4.5C4.87988 3.4 5.77988 2.5 6.87988 2.5H11.9999C14.6199 2.5 16.7499 4.63 16.7499 7.25C16.7499 9.87 14.6199 12 11.9999 12H4.87988V4.5Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.87988 12H14.3799C16.9999 12 19.1299 14.13 19.1299 16.75C19.1299 19.37 16.9999 21.5 14.3799 21.5H6.87988C5.77988 21.5 4.87988 20.6 4.87988 19.5V12V12Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TextBoldRounded.displayName = "TextBoldRounded";
export const TextBoldRoundedMetadata = { 
  id: "text-bold_rounded", 
  baseId: "text-bold", 
  variant: "rounded", 
  name: "Text Bold", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextBoldRounded;
