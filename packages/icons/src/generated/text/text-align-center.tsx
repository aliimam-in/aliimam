/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TextAlignCenterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TextAlignCenter = React.forwardRef<SVGSVGElement, TextAlignCenterProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M21 5H3" />
  <path d="M17 12H7" />
  <path d="M19 19H5" />
    </svg>
  )
);
TextAlignCenter.displayName = "TextAlignCenter";
export const TextAlignCenterMetadata = { id: "text-align-center", baseId: "text-align-center", variant: "default", name: "Text Align Center", category: "text", tags: [], viewBox: "0 0 24 24" } as const;
export default TextAlignCenter;
