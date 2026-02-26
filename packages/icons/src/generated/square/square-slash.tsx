/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareSlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareSlash = React.forwardRef<SVGSVGElement, SquareSlashProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <line x1="9" x2="15" y1="15" y2="9" />
    </svg>
  )
);
SquareSlash.displayName = "SquareSlash";
export const SquareSlashMetadata = { 
  id: "square-slash", 
  baseId: "square-slash", 
  variant: "default", 
  name: "Square Slash", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareSlash;
