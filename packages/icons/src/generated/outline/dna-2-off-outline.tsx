/**
 * Auto-generated logo component: Dna 2 Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Dna2OffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Dna2OffOutlineLogo = React.forwardRef<SVGSVGElement, Dna2OffOutlineLogoProps>(
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
      <path d="M17 3v1c-.007 2.46 -.91 4.554 -2.705 6.281m-2.295 1.719c-3.328 1.99 -5 4.662 -5.008 8.014v1" />
  <path d="M17 21.014v-1c0 -1.44 -.315 -2.755 -.932 -3.944m-4.068 -4.07c-1.903 -1.138 -3.263 -2.485 -4.082 -4.068" />
  <path d="M8 4h9" />
  <path d="M7 20h10" />
  <path d="M12 8h4" />
  <path d="M8 16h8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

Dna2OffOutlineLogo.displayName = "Dna2OffOutlineLogo";

export const Dna2OffOutlineLogoMetadata = {
  id: "dna-2-off-outline",
  baseId: "dna-2-off-outline",
  variant: "default",
  name: "Dna 2 Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Dna2OffOutlineLogo;
