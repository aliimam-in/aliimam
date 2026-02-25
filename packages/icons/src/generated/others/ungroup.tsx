/**
 * Auto-generated logo component: Ungroup (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UngroupLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UngroupLogo = React.forwardRef<SVGSVGElement, UngroupLogoProps>(
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
      <rect width="8" height="6" x="5" y="4" rx="1" />
  <rect width="8" height="6" x="11" y="14" rx="1" />
    </svg>
  )
);

UngroupLogo.displayName = "UngroupLogo";

export const UngroupLogoMetadata = {
  id: "ungroup",
  baseId: "ungroup",
  variant: "default",
  name: "Ungroup",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UngroupLogo;
