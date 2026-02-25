/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BrandYoutubeFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BrandYoutubeFilled = React.forwardRef<SVGSVGElement, BrandYoutubeFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" />
    </svg>
  )
);
BrandYoutubeFilled.displayName = "BrandYoutubeFilled";
export const BrandYoutubeFilledMetadata = { 
  id: "brand-youtube_filled", 
  baseId: "brand-youtube", 
  variant: "filled", 
  name: "Brand Youtube", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BrandYoutubeFilled;
