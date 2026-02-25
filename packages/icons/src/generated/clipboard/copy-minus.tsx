/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CopyMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CopyMinus = React.forwardRef<SVGSVGElement, CopyMinusProps>(
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
      <line x1="12" x2="18" y1="15" y2="15" />
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
);
CopyMinus.displayName = "CopyMinus";
export const CopyMinusMetadata = { 
  id: "copy-minus", 
  baseId: "copy-minus", 
  variant: "default", 
  name: "Copy Minus", 
  category: "clipboard", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CopyMinus;
