/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextInitialProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextInitial = React.forwardRef<SVGSVGElement, TextInitialProps>(
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
      <path d="M15 5h6" />
  <path d="M15 12h6" />
  <path d="M3 19h18" />
  <path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" />
  <path d="M3.92 10h6.16" />
    </svg>
  )
);
TextInitial.displayName = "TextInitial";
export const TextInitialMetadata = { 
  id: "text-initial", 
  baseId: "text-initial", 
  variant: "default", 
  name: "Text Initial", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextInitial;
