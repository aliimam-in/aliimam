/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareAsteriskProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareAsterisk = React.forwardRef<SVGSVGElement, SquareAsteriskProps>(
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
  <path d="M12 8v8" />
  <path d="m8.5 14 7-4" />
  <path d="m8.5 10 7 4" />
    </svg>
  )
);
SquareAsterisk.displayName = "SquareAsterisk";
export const SquareAsteriskMetadata = { 
  id: "square-asterisk", 
  baseId: "square-asterisk", 
  variant: "default", 
  name: "Square Asterisk", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareAsterisk;
