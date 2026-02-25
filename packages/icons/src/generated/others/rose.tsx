/**
 * Auto-generated logo component: Rose (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RoseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RoseLogo = React.forwardRef<SVGSVGElement, RoseLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17 10h-1a4 4 0 1 1 4-4v.534" />
  <path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" />
  <path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" />
  <path d="M9.77 12C4 15 2 22 2 22" />
  <circle cx="17" cy="8" r="2" />
    </svg>
  )
);

RoseLogo.displayName = "RoseLogo";

export const RoseLogoMetadata = {
  id: "rose",
  baseId: "rose",
  variant: "default",
  name: "Rose",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RoseLogo;
