/**
 * Auto-generated logo component: Heading Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeadingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeadingOutlineLogo = React.forwardRef<SVGSVGElement, HeadingOutlineLogoProps>(
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
      <path d="M7 12h10" />
  <path d="M7 5v14" />
  <path d="M17 5v14" />
  <path d="M15 19h4" />
  <path d="M15 5h4" />
  <path d="M5 19h4" />
  <path d="M5 5h4" />
    </svg>
  )
);

HeadingOutlineLogo.displayName = "HeadingOutlineLogo";

export const HeadingOutlineLogoMetadata = {
  id: "heading-outline",
  baseId: "heading-outline",
  variant: "default",
  name: "Heading Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeadingOutlineLogo;
