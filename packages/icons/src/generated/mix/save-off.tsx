/**
 * Auto-generated logo component: Save Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SaveOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SaveOffLogo = React.forwardRef<SVGSVGElement, SaveOffLogoProps>(
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
      <path d="M13 13H8a1 1 0 0 0-1 1v7" />
  <path d="M14 8h1" />
  <path d="M17 21v-4" />
  <path d="m2 2 20 20" />
  <path d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" />
  <path d="M29.5 11.5s5 5 4 5" />
  <path d="M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" />
    </svg>
  )
);

SaveOffLogo.displayName = "SaveOffLogo";

export const SaveOffLogoMetadata = {
  id: "save-off",
  baseId: "save-off",
  variant: "default",
  name: "Save Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SaveOffLogo;
