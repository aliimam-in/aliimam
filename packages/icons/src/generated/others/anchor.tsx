/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AnchorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Anchor = React.forwardRef<SVGSVGElement, AnchorProps>(
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
      <path d="M12 6v16" />
  <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
  <path d="M9 11h6" />
  <circle cx="12" cy="4" r="2" />
    </svg>
  )
);
Anchor.displayName = "Anchor";
export const AnchorMetadata = { 
  id: "anchor", 
  baseId: "anchor", 
  variant: "default", 
  name: "Anchor", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Anchor;
