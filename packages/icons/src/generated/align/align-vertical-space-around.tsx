/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignVerticalSpaceAroundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignVerticalSpaceAround = React.forwardRef<SVGSVGElement, AlignVerticalSpaceAroundProps>(
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
      <rect width="10" height="6" x="7" y="9" rx="2" />
  <path d="M22 20H2" />
  <path d="M22 4H2" />
    </svg>
  )
);
AlignVerticalSpaceAround.displayName = "AlignVerticalSpaceAround";
export const AlignVerticalSpaceAroundMetadata = { 
  id: "align-vertical-space-around", 
  baseId: "align-vertical-space-around", 
  variant: "default", 
  name: "Align Vertical Space Around", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignVerticalSpaceAround;
