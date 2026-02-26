/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignHorizontalJustifyCenterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignHorizontalJustifyCenter = React.forwardRef<SVGSVGElement, AlignHorizontalJustifyCenterProps>(
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
      <rect width="6" height="14" x="2" y="5" rx="2" />
  <rect width="6" height="10" x="16" y="7" rx="2" />
  <path d="M12 2v20" />
    </svg>
  )
);
AlignHorizontalJustifyCenter.displayName = "AlignHorizontalJustifyCenter";
export const AlignHorizontalJustifyCenterMetadata = { 
  id: "align-horizontal-justify-center", 
  baseId: "align-horizontal-justify-center", 
  variant: "default", 
  name: "Align Horizontal Justify Center", 
  category: "align", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AlignHorizontalJustifyCenter;
