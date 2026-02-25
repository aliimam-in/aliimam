/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScrollTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScrollText = React.forwardRef<SVGSVGElement, ScrollTextProps>(
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
      <path d="M15 12h-5" />
  <path d="M15 8h-5" />
  <path d="M19 17V5a2 2 0 0 0-2-2H4" />
  <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
    </svg>
  )
);
ScrollText.displayName = "ScrollText";
export const ScrollTextMetadata = { 
  id: "scroll-text", 
  baseId: "scroll-text", 
  variant: "default", 
  name: "Scroll Text", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ScrollText;
