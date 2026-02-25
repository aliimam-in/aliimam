/**
 * Auto-generated logo component: Mist Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MistOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MistOffOutlineLogo = React.forwardRef<SVGSVGElement, MistOffOutlineLogoProps>(
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
      <path d="M12 5h9" />
  <path d="M3 10h7" />
  <path d="M18 10h1" />
  <path d="M5 15h5" />
  <path d="M14 15h1m4 0h2" />
  <path d="M3 20h9m4 0h3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MistOffOutlineLogo.displayName = "MistOffOutlineLogo";

export const MistOffOutlineLogoMetadata = {
  id: "mist-off-outline",
  baseId: "mist-off-outline",
  variant: "default",
  name: "Mist Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MistOffOutlineLogo;
