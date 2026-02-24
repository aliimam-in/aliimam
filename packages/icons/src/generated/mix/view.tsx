/**
 * Auto-generated logo component: View (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ViewLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ViewLogo = React.forwardRef<SVGSVGElement, ViewLogoProps>(
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
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
  <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
  <circle cx="12" cy="12" r="1" />
  <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
    </svg>
  )
);

ViewLogo.displayName = "ViewLogo";

export const ViewLogoMetadata = {
  id: "view",
  baseId: "view",
  variant: "default",
  name: "View",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ViewLogo;
