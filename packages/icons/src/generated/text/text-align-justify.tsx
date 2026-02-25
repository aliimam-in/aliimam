/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextAlignJustifyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextAlignJustify = React.forwardRef<SVGSVGElement, TextAlignJustifyProps>(
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
      <path d="M3 5h18" />
  <path d="M3 12h18" />
  <path d="M3 19h18" />
    </svg>
  )
);
TextAlignJustify.displayName = "TextAlignJustify";
export const TextAlignJustifyMetadata = { 
  id: "text-align-justify", 
  baseId: "text-align-justify", 
  variant: "default", 
  name: "Text Align Justify", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextAlignJustify;
