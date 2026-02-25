/**
 * Auto-generated logo component: Heading (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeadingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeadingLogo = React.forwardRef<SVGSVGElement, HeadingLogoProps>(
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
      <path d="M6 12h12" />
  <path d="M6 20V4" />
  <path d="M18 20V4" />
    </svg>
  )
);

HeadingLogo.displayName = "HeadingLogo";

export const HeadingLogoMetadata = {
  id: "heading",
  baseId: "heading",
  variant: "default",
  name: "Heading",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeadingLogo;
