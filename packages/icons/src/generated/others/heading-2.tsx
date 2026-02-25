/**
 * Auto-generated logo component: Heading 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Heading2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Heading2Logo = React.forwardRef<SVGSVGElement, Heading2LogoProps>(
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
  <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
    </svg>
  )
);

Heading2Logo.displayName = "Heading2Logo";

export const Heading2LogoMetadata = {
  id: "heading-2",
  baseId: "heading-2",
  variant: "default",
  name: "Heading 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Heading2Logo;
