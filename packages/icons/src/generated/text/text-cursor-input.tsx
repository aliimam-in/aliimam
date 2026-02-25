/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextCursorInputProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextCursorInput = React.forwardRef<SVGSVGElement, TextCursorInputProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" />
  <path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
  <path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
  <path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" />
  <path d="M9 6v12" />
    </svg>
  )
);
TextCursorInput.displayName = "TextCursorInput";
export const TextCursorInputMetadata = { id: "text-cursor-input", baseId: "text-cursor-input", variant: "default", name: "Text Cursor Input", category: "text", tags: [], viewBox: "0 0 24 24" } as const;
export default TextCursorInput;
