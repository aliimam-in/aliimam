/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FoldHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FoldHorizontal = React.forwardRef<SVGSVGElement, FoldHorizontalProps>(
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
      <path d="M2 12h6" />
  <path d="M22 12h-6" />
  <path d="M12 2v2" />
  <path d="M12 8v2" />
  <path d="M12 14v2" />
  <path d="M12 20v2" />
  <path d="m19 9-3 3 3 3" />
  <path d="m5 15 3-3-3-3" />
    </svg>
  )
);
FoldHorizontal.displayName = "FoldHorizontal";
export const FoldHorizontalMetadata = { 
  id: "fold-horizontal", 
  baseId: "fold-horizontal", 
  variant: "default", 
  name: "Fold Horizontal", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FoldHorizontal;
