/**
 * Auto-generated logo component: Chair Director Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChairDirectorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChairDirectorOutlineLogo = React.forwardRef<SVGSVGElement, ChairDirectorOutlineLogoProps>(
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
      <path d="M6 21l12 -9" />
  <path d="M6 12l12 9" />
  <path d="M5 12h14" />
  <path d="M6 3v9" />
  <path d="M18 3v9" />
  <path d="M6 8h12" />
  <path d="M6 5h12" />
    </svg>
  )
);

ChairDirectorOutlineLogo.displayName = "ChairDirectorOutlineLogo";

export const ChairDirectorOutlineLogoMetadata = {
  id: "chair-director-outline",
  baseId: "chair-director-outline",
  variant: "default",
  name: "Chair Director Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChairDirectorOutlineLogo;
