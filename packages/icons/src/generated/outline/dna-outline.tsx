/**
 * Auto-generated logo component: Dna Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DnaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DnaOutlineLogo = React.forwardRef<SVGSVGElement, DnaOutlineLogoProps>(
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
      <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656" />
  <path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
  <path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" />
    </svg>
  )
);

DnaOutlineLogo.displayName = "DnaOutlineLogo";

export const DnaOutlineLogoMetadata = {
  id: "dna-outline",
  baseId: "dna-outline",
  variant: "default",
  name: "Dna Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DnaOutlineLogo;
