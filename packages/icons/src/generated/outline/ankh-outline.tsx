/**
 * Auto-generated logo component: Ankh Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AnkhOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AnkhOutlineLogo = React.forwardRef<SVGSVGElement, AnkhOutlineLogoProps>(
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
      <path d="M6 13h12" />
  <path d="M12 21v-8l-.422 -.211a6.472 6.472 0 0 1 -3.578 -5.789a4 4 0 1 1 8 0a6.472 6.472 0 0 1 -3.578 5.789l-.422 .211" />
    </svg>
  )
);

AnkhOutlineLogo.displayName = "AnkhOutlineLogo";

export const AnkhOutlineLogoMetadata = {
  id: "ankh-outline",
  baseId: "ankh-outline",
  variant: "default",
  name: "Ankh Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AnkhOutlineLogo;
