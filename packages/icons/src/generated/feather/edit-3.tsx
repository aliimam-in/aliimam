/**
 * Auto-generated logo component: Edit 3 (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Edit3LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Edit3Logo = React.forwardRef<SVGSVGElement, Edit3LogoProps>(
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
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  )
);

Edit3Logo.displayName = "Edit3Logo";

export const Edit3LogoMetadata = {
  id: "edit-3",
  baseId: "edit-3",
  variant: "default",
  name: "Edit 3",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Edit3Logo;
