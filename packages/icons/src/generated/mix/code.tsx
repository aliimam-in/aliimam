/**
 * Auto-generated logo component: Code (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCodeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCodeLogo = React.forwardRef<SVGSVGElement, MixCodeLogoProps>(
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
      <path d="m16 18 6-6-6-6" />
  <path d="m8 6-6 6 6 6" />
    </svg>
  )
);

MixCodeLogo.displayName = "MixCodeLogo";

export const MixCodeLogoMetadata = {
  id: "code",
  baseId: "code",
  variant: "default",
  name: "Code",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCodeLogo;
