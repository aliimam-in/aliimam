/**
 * Auto-generated logo component: Alt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AltOutlineLogo = React.forwardRef<SVGSVGElement, AltOutlineLogoProps>(
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
      <path d="M4 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M4 13h4" />
  <path d="M11 8v8h4" />
  <path d="M16 8h4" />
  <path d="M18 8v8" />
    </svg>
  )
);

AltOutlineLogo.displayName = "AltOutlineLogo";

export const AltOutlineLogoMetadata = {
  id: "alt-outline",
  baseId: "alt-outline",
  variant: "default",
  name: "Alt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AltOutlineLogo;
