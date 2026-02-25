/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RectangleEllipsisProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RectangleEllipsis = React.forwardRef<SVGSVGElement, RectangleEllipsisProps>(
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
      <rect width="20" height="12" x="2" y="6" rx="2" />
  <path d="M12 12h.01" />
  <path d="M17 12h.01" />
  <path d="M7 12h.01" />
    </svg>
  )
);
RectangleEllipsis.displayName = "RectangleEllipsis";
export const RectangleEllipsisMetadata = { 
  id: "rectangle-ellipsis", 
  baseId: "rectangle-ellipsis", 
  variant: "default", 
  name: "Rectangle Ellipsis", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RectangleEllipsis;
