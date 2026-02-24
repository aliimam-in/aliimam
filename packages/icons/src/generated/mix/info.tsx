/**
 * Auto-generated logo component: Info (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixInfoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixInfoLogo = React.forwardRef<SVGSVGElement, MixInfoLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M12 16v-4" />
  <path d="M12 8h.01" />
    </svg>
  )
);

MixInfoLogo.displayName = "MixInfoLogo";

export const MixInfoLogoMetadata = {
  id: "info",
  baseId: "info",
  variant: "default",
  name: "Info",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixInfoLogo;
