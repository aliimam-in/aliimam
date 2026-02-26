/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PresentationProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Presentation = React.forwardRef<SVGSVGElement, PresentationProps>(
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
      <path d="M2 3h20" />
  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
  <path d="m7 21 5-5 5 5" />
    </svg>
  )
);
Presentation.displayName = "Presentation";
export const PresentationMetadata = { 
  id: "presentation", 
  baseId: "presentation", 
  variant: "default", 
  name: "Presentation", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Presentation;
