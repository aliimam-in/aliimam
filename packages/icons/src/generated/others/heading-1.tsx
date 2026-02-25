/**
 * Auto-generated logo component: Heading 1 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Heading1LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Heading1Logo = React.forwardRef<SVGSVGElement, Heading1LogoProps>(
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
  <path d="m17 12 3-2v8" />
    </svg>
  )
);

Heading1Logo.displayName = "Heading1Logo";

export const Heading1LogoMetadata = {
  id: "heading-1",
  baseId: "heading-1",
  variant: "default",
  name: "Heading 1",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Heading1Logo;
