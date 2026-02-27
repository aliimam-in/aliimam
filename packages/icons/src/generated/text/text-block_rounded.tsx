/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextBlockRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextBlockRounded = React.forwardRef<SVGSVGElement, TextBlockRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8.88999C10.15 7.31999 13.85 7.31999 17 8.88999"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16.3V7.92999"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TextBlockRounded.displayName = "TextBlockRounded";
export const TextBlockRoundedMetadata = { 
  id: "text-block_rounded", 
  baseId: "text-block", 
  variant: "rounded", 
  name: "Text Block", 
  category: "text", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TextBlockRounded;
