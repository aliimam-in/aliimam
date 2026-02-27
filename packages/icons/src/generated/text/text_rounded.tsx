/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextRounded = React.forwardRef<SVGSVGElement, TextRoundedProps>(
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
      <path d="M2.66992 7.17V5.35C2.66992 4.2 3.59992 3.28 4.73992 3.28H19.2599C20.4099 3.28 21.3299 4.21 21.3299 5.35V7.17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20.72V4.11"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.06006 20.72H15.9401"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TextRounded.displayName = "TextRounded";
export const TextRoundedMetadata = { 
  id: "text_rounded", 
  baseId: "text", 
  variant: "rounded", 
  name: "Text", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextRounded;
