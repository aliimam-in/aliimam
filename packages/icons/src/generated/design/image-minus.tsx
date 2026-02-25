/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ImageMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ImageMinus = React.forwardRef<SVGSVGElement, ImageMinusProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
  <line x1="16" x2="22" y1="5" y2="5" />
  <circle cx="9" cy="9" r="2" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
);
ImageMinus.displayName = "ImageMinus";
export const ImageMinusMetadata = { id: "image-minus", baseId: "image-minus", variant: "default", name: "Image Minus", category: "design", tags: [], viewBox: "0 0 24 24" } as const;
export default ImageMinus;
