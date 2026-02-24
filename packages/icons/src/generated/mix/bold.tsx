/**
 * Auto-generated logo component: Bold (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixBoldLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixBoldLogo = React.forwardRef<SVGSVGElement, MixBoldLogoProps>(
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
      <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
    </svg>
  )
);

MixBoldLogo.displayName = "MixBoldLogo";

export const MixBoldLogoMetadata = {
  id: "bold",
  baseId: "bold",
  variant: "default",
  name: "Bold",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixBoldLogo;
