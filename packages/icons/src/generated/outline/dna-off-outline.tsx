/**
 * Auto-generated logo component: Dna Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DnaOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DnaOffOutlineLogo = React.forwardRef<SVGSVGElement, DnaOffOutlineLogoProps>(
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
      <path d="M16 12a3.898 3.898 0 0 0 -1.172 -2.828a4.027 4.027 0 0 0 -2.828 -1.172m-2.828 1.172a4 4 0 1 0 5.656 5.656" />
  <path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
  <path d="M14.828 3.515a4 4 0 1 0 5.657 5.657" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DnaOffOutlineLogo.displayName = "DnaOffOutlineLogo";

export const DnaOffOutlineLogoMetadata = {
  id: "dna-off-outline",
  baseId: "dna-off-outline",
  variant: "default",
  name: "Dna Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DnaOffOutlineLogo;
