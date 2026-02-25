/**
 * Auto-generated logo component: Heading 4 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Heading4LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Heading4Logo = React.forwardRef<SVGSVGElement, Heading4LogoProps>(
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
      <path d="M12 18V6" />
  <path d="M17 10v3a1 1 0 0 0 1 1h3" />
  <path d="M21 10v8" />
  <path d="M4 12h8" />
  <path d="M4 18V6" />
    </svg>
  )
);

Heading4Logo.displayName = "Heading4Logo";

export const Heading4LogoMetadata = {
  id: "heading-4",
  baseId: "heading-4",
  variant: "default",
  name: "Heading 4",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Heading4Logo;
