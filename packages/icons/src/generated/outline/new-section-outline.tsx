/**
 * Auto-generated logo component: New Section Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NewSectionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const NewSectionOutlineLogo = React.forwardRef<SVGSVGElement, NewSectionOutlineLogoProps>(
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
      <path d="M9 12l6 0" />
  <path d="M12 9l0 6" />
  <path d="M4 6v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1m-5 0h-2m-5 0h-1a1 1 0 0 1 -1 -1v-1m0 -5v-2m0 -5" />
    </svg>
  )
);

NewSectionOutlineLogo.displayName = "NewSectionOutlineLogo";

export const NewSectionOutlineLogoMetadata = {
  id: "new-section-outline",
  baseId: "new-section-outline",
  variant: "default",
  name: "New Section Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default NewSectionOutlineLogo;
