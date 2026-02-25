/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareMenuProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareMenu = React.forwardRef<SVGSVGElement, SquareMenuProps>(
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
  <path d="M7 8h10" />
  <path d="M7 12h10" />
  <path d="M7 16h10" />
    </svg>
  )
);
SquareMenu.displayName = "SquareMenu";
export const SquareMenuMetadata = { 
  id: "square-menu", 
  baseId: "square-menu", 
  variant: "default", 
  name: "Square Menu", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareMenu;
