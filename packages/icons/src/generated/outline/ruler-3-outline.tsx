/**
 * Auto-generated logo component: Ruler 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Ruler3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Ruler3OutlineLogo = React.forwardRef<SVGSVGElement, Ruler3OutlineLogoProps>(
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
      <path d="M19.875 8c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75" />
  <path d="M9 8v2" />
  <path d="M6 8v3" />
  <path d="M12 8v3" />
  <path d="M18 8v3" />
  <path d="M15 8v2" />
    </svg>
  )
);

Ruler3OutlineLogo.displayName = "Ruler3OutlineLogo";

export const Ruler3OutlineLogoMetadata = {
  id: "ruler-3-outline",
  baseId: "ruler-3-outline",
  variant: "default",
  name: "Ruler 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ruler3OutlineLogo;
