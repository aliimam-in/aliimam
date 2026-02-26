/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronsLeftRightEllipsisProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronsLeftRightEllipsis = React.forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisProps>(
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
      <path d="M12 12h.01" />
  <path d="M16 12h.01" />
  <path d="m17 7 5 5-5 5" />
  <path d="m7 7-5 5 5 5" />
  <path d="M8 12h.01" />
    </svg>
  )
);
ChevronsLeftRightEllipsis.displayName = "ChevronsLeftRightEllipsis";
export const ChevronsLeftRightEllipsisMetadata = { 
  id: "chevrons-left-right-ellipsis", 
  baseId: "chevrons-left-right-ellipsis", 
  variant: "default", 
  name: "Chevrons Left Right Ellipsis", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChevronsLeftRightEllipsis;
