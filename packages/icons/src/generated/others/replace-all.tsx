/**
 * Auto-generated logo component: Replace All (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReplaceAllLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ReplaceAllLogo = React.forwardRef<SVGSVGElement, ReplaceAllLogoProps>(
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
      <path d="M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
  <path d="M14 4a1 1 0 0 1 1-1" />
  <path d="M15 10a1 1 0 0 1-1-1" />
  <path d="M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
  <path d="M21 4a1 1 0 0 0-1-1" />
  <path d="M21 9a1 1 0 0 1-1 1" />
  <path d="m3 7 3 3 3-3" />
  <path d="M6 10V5a2 2 0 0 1 2-2h2" />
  <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  )
);

ReplaceAllLogo.displayName = "ReplaceAllLogo";

export const ReplaceAllLogoMetadata = {
  id: "replace-all",
  baseId: "replace-all",
  variant: "default",
  name: "Replace All",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ReplaceAllLogo;
