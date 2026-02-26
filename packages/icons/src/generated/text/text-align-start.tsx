/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextAlignStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextAlignStart = React.forwardRef<SVGSVGElement, TextAlignStartProps>(
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
      <path d="M21 5H3" />
  <path d="M15 12H3" />
  <path d="M17 19H3" />
    </svg>
  )
);
TextAlignStart.displayName = "TextAlignStart";
export const TextAlignStartMetadata = { 
  id: "text-align-start", 
  baseId: "text-align-start", 
  variant: "default", 
  name: "Text Align Start", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextAlignStart;
