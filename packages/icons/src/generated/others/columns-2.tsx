/**
 * Auto-generated logo component: Columns 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Columns2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Columns2Logo = React.forwardRef<SVGSVGElement, Columns2LogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M12 3v18" />
    </svg>
  )
);

Columns2Logo.displayName = "Columns2Logo";

export const Columns2LogoMetadata = {
  id: "columns-2",
  baseId: "columns-2",
  variant: "default",
  name: "Columns 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Columns2Logo;
