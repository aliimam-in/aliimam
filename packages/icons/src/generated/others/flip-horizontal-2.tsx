/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlipHorizontal2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlipHorizontal2 = React.forwardRef<SVGSVGElement, FlipHorizontal2Props>(
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
      <path d="m3 7 5 5-5 5V7" />
  <path d="m21 7-5 5 5 5V7" />
  <path d="M12 20v2" />
  <path d="M12 14v2" />
  <path d="M12 8v2" />
  <path d="M12 2v2" />
    </svg>
  )
);
FlipHorizontal2.displayName = "FlipHorizontal2";
export const FlipHorizontal2Metadata = { 
  id: "flip-horizontal-2", 
  baseId: "flip-horizontal-2", 
  variant: "default", 
  name: "Flip Horizontal 2", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlipHorizontal2;
