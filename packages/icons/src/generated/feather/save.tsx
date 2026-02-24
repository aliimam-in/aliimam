/**
 * Auto-generated logo component: Save (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SaveLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SaveLogo = React.forwardRef<SVGSVGElement, SaveLogoProps>(
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
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
    </svg>
  )
);

SaveLogo.displayName = "SaveLogo";

export const SaveLogoMetadata = {
  id: "save",
  baseId: "save",
  variant: "default",
  name: "Save",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SaveLogo;
