/**
 * Auto-generated logo component: Crutches Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CrutchesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CrutchesOutlineLogo = React.forwardRef<SVGSVGElement, CrutchesOutlineLogoProps>(
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
      <path d="M8 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2" />
  <path d="M11 21h2" />
  <path d="M12 21v-4.092a3 3 0 0 1 .504 -1.664l.992 -1.488a3 3 0 0 0 .504 -1.664v-5.092" />
  <path d="M12 21v-4.092a3 3 0 0 0 -.504 -1.664l-.992 -1.488a3 3 0 0 1 -.504 -1.664v-5.092" />
  <path d="M10 11h4" />
    </svg>
  )
);

CrutchesOutlineLogo.displayName = "CrutchesOutlineLogo";

export const CrutchesOutlineLogoMetadata = {
  id: "crutches-outline",
  baseId: "crutches-outline",
  variant: "default",
  name: "Crutches Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CrutchesOutlineLogo;
