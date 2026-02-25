/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BrandTumblrFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BrandTumblrFilled = React.forwardRef<SVGSVGElement, BrandTumblrFilledProps>(
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
      <path d="M14 2a1 1 0 0 1 1 1v3h3a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -1 1h-3v4h3a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -1 1h-4a5 5 0 0 1 -5 -5v-5h-3a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 1 -1h1a2 2 0 0 0 2 -2v-1a1 1 0 0 1 1 -1z" />
    </svg>
  )
);
BrandTumblrFilled.displayName = "BrandTumblrFilled";
export const BrandTumblrFilledMetadata = { 
  id: "brand-tumblr_filled", 
  baseId: "brand-tumblr", 
  variant: "filled", 
  name: "Brand Tumblr", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BrandTumblrFilled;
