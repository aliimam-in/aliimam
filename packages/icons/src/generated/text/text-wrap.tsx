/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextWrapProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextWrap = React.forwardRef<SVGSVGElement, TextWrapProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m16 16-3 3 3 3" />
  <path d="M3 12h14.5a1 1 0 0 1 0 7H13" />
  <path d="M3 19h6" />
  <path d="M3 5h18" />
    </svg>
  )
);
TextWrap.displayName = "TextWrap";
export const TextWrapMetadata = { id: "text-wrap", baseId: "text-wrap", variant: "default", name: "Text Wrap", category: "text", tags: [], viewBox: "0 0 24 24" } as const;
export default TextWrap;
