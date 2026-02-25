/**
 * Auto-generated logo component: Passport (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PassportProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Passport = React.forwardRef<SVGSVGElement, PassportProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M128,0 C57.28,0 0,57.28 0,128 L64,128 C64,92.672 92.672,64 128,64 L128,0 L128,0 Z" fill="#D6FF00"></path>
        <path d="M256,128 C256,57.28 198.72,0 128,0 L128,64 C163.328,64 192,92.672 192,128 L256,128 L256,128 Z" fill="#34E27A"></path>
        <path d="M128,256 C198.72,256 256,198.72 256,128 L192,128 C192,163.328 163.328,192 128,192 L128,256 L128,256 Z" fill="#00B9F1"></path>
        <path d="M64,256 L64,128 L0,128 L0,320 L128,320 L128,256 L64,256 L64,256 Z" fill="#FFFFFF"></path>
    </g>
    </svg>
  )
);

Passport.displayName = "Passport";

export const PassportMetadata = {
  id: "passport",
  baseId: "passport",
  variant: "default",
  name: "Passport",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 320",
} as const;

export default Passport;
