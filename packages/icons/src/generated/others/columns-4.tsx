/**
 * Auto-generated logo component: Columns 4 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Columns4LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Columns4Logo = React.forwardRef<SVGSVGElement, Columns4LogoProps>(
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
  <path d="M7.5 3v18" />
  <path d="M12 3v18" />
  <path d="M16.5 3v18" />
    </svg>
  )
);

Columns4Logo.displayName = "Columns4Logo";

export const Columns4LogoMetadata = {
  id: "columns-4",
  baseId: "columns-4",
  variant: "default",
  name: "Columns 4",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Columns4Logo;
