/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SeparatorVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SeparatorVertical = React.forwardRef<SVGSVGElement, SeparatorVerticalProps>(
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
      <path d="M12 3v18" />
  <path d="m16 16 4-4-4-4" />
  <path d="m8 8-4 4 4 4" />
    </svg>
  )
);
SeparatorVertical.displayName = "SeparatorVertical";
export const SeparatorVerticalMetadata = { 
  id: "separator-vertical", 
  baseId: "separator-vertical", 
  variant: "default", 
  name: "Separator Vertical", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SeparatorVertical;
