/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextCursorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextCursor = React.forwardRef<SVGSVGElement, TextCursorProps>(
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
      <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
  <path d="M7 22h1a4 4 0 0 0 4-4v-1" />
  <path d="M7 2h1a4 4 0 0 1 4 4v1" />
    </svg>
  )
);
TextCursor.displayName = "TextCursor";
export const TextCursorMetadata = { 
  id: "text-cursor", 
  baseId: "text-cursor", 
  variant: "default", 
  name: "Text Cursor", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextCursor;
