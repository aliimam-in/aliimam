/**
 * Auto-generated logo component: Remove Formatting (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RemoveFormattingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RemoveFormattingLogo = React.forwardRef<SVGSVGElement, RemoveFormattingLogoProps>(
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
      <path d="M4 7V4h16v3" />
  <path d="M5 20h6" />
  <path d="M13 4 8 20" />
  <path d="m15 15 5 5" />
  <path d="m20 15-5 5" />
    </svg>
  )
);

RemoveFormattingLogo.displayName = "RemoveFormattingLogo";

export const RemoveFormattingLogoMetadata = {
  id: "remove-formatting",
  baseId: "remove-formatting",
  variant: "default",
  name: "Remove Formatting",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RemoveFormattingLogo;
