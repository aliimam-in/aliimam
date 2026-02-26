/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClosedCaptionProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClosedCaption = React.forwardRef<SVGSVGElement, ClosedCaptionProps>(
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
      <path d="M10 9.17a3 3 0 1 0 0 5.66" />
  <path d="M17 9.17a3 3 0 1 0 0 5.66" />
  <rect x="2" y="5" width="20" height="14" rx="2" />
    </svg>
  )
);
ClosedCaption.displayName = "ClosedCaption";
export const ClosedCaptionMetadata = { 
  id: "closed-caption", 
  baseId: "closed-caption", 
  variant: "default", 
  name: "Closed Caption", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClosedCaption;
