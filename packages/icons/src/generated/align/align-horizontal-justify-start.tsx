/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignHorizontalJustifyStartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignHorizontalJustifyStart = React.forwardRef<SVGSVGElement, AlignHorizontalJustifyStartProps>(
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
      <rect width="6" height="14" x="6" y="5" rx="2" />
  <rect width="6" height="10" x="16" y="7" rx="2" />
  <path d="M2 2v20" />
    </svg>
  )
);
AlignHorizontalJustifyStart.displayName = "AlignHorizontalJustifyStart";
export const AlignHorizontalJustifyStartMetadata = { 
  id: "align-horizontal-justify-start", 
  baseId: "align-horizontal-justify-start", 
  variant: "default", 
  name: "Align Horizontal Justify Start", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignHorizontalJustifyStart;
