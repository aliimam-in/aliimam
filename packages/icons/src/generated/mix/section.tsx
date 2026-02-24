/**
 * Auto-generated logo component: Section (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SectionLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SectionLogo = React.forwardRef<SVGSVGElement, SectionLogoProps>(
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
      <path d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" />
  <path d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" />
    </svg>
  )
);

SectionLogo.displayName = "SectionLogo";

export const SectionLogoMetadata = {
  id: "section",
  baseId: "section",
  variant: "default",
  name: "Section",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SectionLogo;
