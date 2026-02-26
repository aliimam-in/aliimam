/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ThumbsDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ThumbsDown = React.forwardRef<SVGSVGElement, ThumbsDownProps>(
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
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
  <path d="M17 14V2" />
    </svg>
  )
);
ThumbsDown.displayName = "ThumbsDown";
export const ThumbsDownMetadata = { 
  id: "thumbs-down", 
  baseId: "thumbs-down", 
  variant: "default", 
  name: "Thumbs Down", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ThumbsDown;
