/**
 * Auto-generated logo component: Underline (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixUnderlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixUnderlineLogo = React.forwardRef<SVGSVGElement, MixUnderlineLogoProps>(
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
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
  <line x1="4" x2="20" y1="20" y2="20" />
    </svg>
  )
);

MixUnderlineLogo.displayName = "MixUnderlineLogo";

export const MixUnderlineLogoMetadata = {
  id: "underline",
  baseId: "underline",
  variant: "default",
  name: "Underline",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixUnderlineLogo;
