/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignVerticalJustifyStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignVerticalJustifyStart = React.forwardRef<SVGSVGElement, AlignVerticalJustifyStartProps>(
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
      <rect width="14" height="6" x="5" y="16" rx="2" />
  <rect width="10" height="6" x="7" y="6" rx="2" />
  <path d="M2 2h20" />
    </svg>
  )
);
AlignVerticalJustifyStart.displayName = "AlignVerticalJustifyStart";
export const AlignVerticalJustifyStartMetadata = { 
  id: "align-vertical-justify-start", 
  baseId: "align-vertical-justify-start", 
  variant: "default", 
  name: "Align Vertical Justify Start", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignVerticalJustifyStart;
