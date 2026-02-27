/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextItalicRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextItalicRounded = React.forwardRef<SVGSVGElement, TextItalicRoundedProps>(
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
      <path d="M9.62012 3H18.8701"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.12012 21H14.3701"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.25 3L9.75 21"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TextItalicRounded.displayName = "TextItalicRounded";
export const TextItalicRoundedMetadata = { 
  id: "text-italic_rounded", 
  baseId: "text-italic", 
  variant: "rounded", 
  name: "Text Italic", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextItalicRounded;
