/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BrandKickFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BrandKickFilled = React.forwardRef<SVGSVGElement, BrandKickFilledProps>(
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
      <path d="M9 3a1 1 0 0 1 1 1v3h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h6a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-1v1a1 1 0 0 1 -.883 .993l-.117 .007h-1v2h1a1 1 0 0 1 .993 .883l.007 .117v1h1a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-1h-1a1 1 0 0 1 -.993 -.883l-.007 -.117v-1h-1v3a1 1 0 0 1 -.883 .993l-.117 .007h-5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1z" />
    </svg>
  )
);
BrandKickFilled.displayName = "BrandKickFilled";
export const BrandKickFilledMetadata = { 
  id: "brand-kick_filled", 
  baseId: "brand-kick", 
  variant: "filled", 
  name: "Brand Kick", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BrandKickFilled;
