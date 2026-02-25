/**
 * Auto-generated logo component: Section Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SectionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SectionOutlineLogo = React.forwardRef<SVGSVGElement, SectionOutlineLogoProps>(
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
      <path d="M20 20h.01" />
  <path d="M4 20h.01" />
  <path d="M8 20h.01" />
  <path d="M12 20h.01" />
  <path d="M16 20h.01" />
  <path d="M20 4h.01" />
  <path d="M4 4h.01" />
  <path d="M8 4h.01" />
  <path d="M12 4h.01" />
  <path d="M16 4l0 .01" />
  <path d="M4 9a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -6" />
    </svg>
  )
);

SectionOutlineLogo.displayName = "SectionOutlineLogo";

export const SectionOutlineLogoMetadata = {
  id: "section-outline",
  baseId: "section-outline",
  variant: "default",
  name: "Section Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SectionOutlineLogo;
