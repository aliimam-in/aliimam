/**
 * Auto-generated logo component: Slash (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixSlashLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixSlashLogo = React.forwardRef<SVGSVGElement, MixSlashLogoProps>(
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
      <path d="M22 2 2 22" />
    </svg>
  )
);

MixSlashLogo.displayName = "MixSlashLogo";

export const MixSlashLogoMetadata = {
  id: "slash",
  baseId: "slash",
  variant: "default",
  name: "Slash",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixSlashLogo;
