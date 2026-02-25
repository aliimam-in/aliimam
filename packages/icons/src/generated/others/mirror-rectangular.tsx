/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MirrorRectangularProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MirrorRectangular = React.forwardRef<SVGSVGElement, MirrorRectangularProps>(
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
      <path d="M11 6 8 9" />
  <path d="m16 7-8 8" />
  <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  )
);
MirrorRectangular.displayName = "MirrorRectangular";
export const MirrorRectangularMetadata = { 
  id: "mirror-rectangular", 
  baseId: "mirror-rectangular", 
  variant: "default", 
  name: "Mirror Rectangular", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MirrorRectangular;
