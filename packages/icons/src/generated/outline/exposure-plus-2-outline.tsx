/**
 * Auto-generated logo component: Exposure Plus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExposurePlus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExposurePlus2OutlineLogo = React.forwardRef<SVGSVGElement, ExposurePlus2OutlineLogoProps>(
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
      <path d="M12 9a4 4 0 1 1 8 0c0 1.098 -.564 2.025 -1.159 2.815l-6.841 7.185h8" />
  <path d="M3 12h6" />
  <path d="M6 9v6" />
    </svg>
  )
);

ExposurePlus2OutlineLogo.displayName = "ExposurePlus2OutlineLogo";

export const ExposurePlus2OutlineLogoMetadata = {
  id: "exposure-plus-2-outline",
  baseId: "exposure-plus-2-outline",
  variant: "default",
  name: "Exposure Plus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExposurePlus2OutlineLogo;
