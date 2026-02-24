/**
 * Auto-generated logo component: Heading 3 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Heading3LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Heading3Logo = React.forwardRef<SVGSVGElement, Heading3LogoProps>(
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
      <path d="M4 12h8" />
  <path d="M4 18V6" />
  <path d="M12 18V6" />
  <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
  <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
    </svg>
  )
);

Heading3Logo.displayName = "Heading3Logo";

export const Heading3LogoMetadata = {
  id: "heading-3",
  baseId: "heading-3",
  variant: "default",
  name: "Heading 3",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Heading3Logo;
