/**
 * Auto-generated logo component: Strikethrough (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StrikethroughLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StrikethroughLogo = React.forwardRef<SVGSVGElement, StrikethroughLogoProps>(
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
      <path d="M16 4H9a3 3 0 0 0-2.83 4" />
  <path d="M14 12a4 4 0 0 1 0 8H6" />
  <line x1="4" x2="20" y1="12" y2="12" />
    </svg>
  )
);

StrikethroughLogo.displayName = "StrikethroughLogo";

export const StrikethroughLogoMetadata = {
  id: "strikethrough",
  baseId: "strikethrough",
  variant: "default",
  name: "Strikethrough",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StrikethroughLogo;
