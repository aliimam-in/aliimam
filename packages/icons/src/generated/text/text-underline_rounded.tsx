/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextUnderlineRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextUnderlineRounded = React.forwardRef<SVGSVGElement, TextUnderlineRoundedProps>(
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
      <path d="M5 21H19" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 3V10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10V3" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TextUnderlineRounded.displayName = "TextUnderlineRounded";
export const TextUnderlineRoundedMetadata = { 
  id: "text-underline_rounded", 
  baseId: "text-underline", 
  variant: "rounded", 
  name: "Text Underline", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextUnderlineRounded;
