/**
 * Auto-generated logo component: Edit 2 (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Edit2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Edit2Logo = React.forwardRef<SVGSVGElement, Edit2LogoProps>(
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
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
    </svg>
  )
);

Edit2Logo.displayName = "Edit2Logo";

export const Edit2LogoMetadata = {
  id: "edit-2",
  baseId: "edit-2",
  variant: "default",
  name: "Edit 2",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Edit2Logo;
