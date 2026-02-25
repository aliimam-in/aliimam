/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowBigRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowBigRight = React.forwardRef<SVGSVGElement, ArrowBigRightProps>(
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
      <path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
    </svg>
  )
);
ArrowBigRight.displayName = "ArrowBigRight";
export const ArrowBigRightMetadata = { 
  id: "arrow-big-right", 
  baseId: "arrow-big-right", 
  variant: "default", 
  name: "Arrow Big Right", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ArrowBigRight;
