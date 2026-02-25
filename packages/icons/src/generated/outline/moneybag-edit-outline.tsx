/**
 * Auto-generated logo component: Moneybag Edit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoneybagEditOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoneybagEditOutlineLogo = React.forwardRef<SVGSVGElement, MoneybagEditOutlineLogoProps>(
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
      <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5" />
  <path d="M11 21h-3a4 4 0 0 1 -4 -4v-1a8 8 0 0 1 14.376 -4.833" />
  <path d="M18.42 15.61a2.1 2.1 0 1 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" />
    </svg>
  )
);

MoneybagEditOutlineLogo.displayName = "MoneybagEditOutlineLogo";

export const MoneybagEditOutlineLogoMetadata = {
  id: "moneybag-edit-outline",
  baseId: "moneybag-edit-outline",
  variant: "default",
  name: "Moneybag Edit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoneybagEditOutlineLogo;
