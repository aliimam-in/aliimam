/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ImagesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Images = React.forwardRef<SVGSVGElement, ImagesProps>(
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
      <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" />
  <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" />
  <circle cx="13" cy="7" r="1" fill="currentColor" />
  <rect x="8" y="2" width="14" height="14" rx="2" />
    </svg>
  )
);
Images.displayName = "Images";
export const ImagesMetadata = { 
  id: "images", 
  baseId: "images", 
  variant: "default", 
  name: "Images", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Images;
