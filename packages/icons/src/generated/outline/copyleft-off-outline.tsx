/**
 * Auto-generated logo component: Copyleft Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CopyleftOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CopyleftOffOutlineLogo = React.forwardRef<SVGSVGElement, CopyleftOffOutlineLogoProps>(
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
      <path d="M13.303 9.3a3.01 3.01 0 0 1 1.405 1.406m-.586 3.413a3.016 3.016 0 0 1 -4.122 .131" />
  <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CopyleftOffOutlineLogo.displayName = "CopyleftOffOutlineLogo";

export const CopyleftOffOutlineLogoMetadata = {
  id: "copyleft-off-outline",
  baseId: "copyleft-off-outline",
  variant: "default",
  name: "Copyleft Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CopyleftOffOutlineLogo;
