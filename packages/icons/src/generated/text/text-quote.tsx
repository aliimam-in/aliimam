/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextQuoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextQuote = React.forwardRef<SVGSVGElement, TextQuoteProps>(
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
      <path d="M17 5H3" />
  <path d="M21 12H8" />
  <path d="M21 19H8" />
  <path d="M3 12v7" />
    </svg>
  )
);
TextQuote.displayName = "TextQuote";
export const TextQuoteMetadata = { 
  id: "text-quote", 
  baseId: "text-quote", 
  variant: "default", 
  name: "Text Quote", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextQuote;
