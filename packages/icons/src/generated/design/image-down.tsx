/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ImageDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ImageDown = React.forwardRef<SVGSVGElement, ImageDownProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
  <path d="m14 19 3 3v-5.5" />
  <path d="m17 22 3-3" />
  <circle cx="9" cy="9" r="2" />
    </svg>
  )
);
ImageDown.displayName = "ImageDown";
export const ImageDownMetadata = { id: "image-down", baseId: "image-down", variant: "default", name: "Image Down", category: "design", tags: [], viewBox: "0 0 24 24" } as const;
export default ImageDown;
