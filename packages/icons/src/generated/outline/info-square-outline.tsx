/**
 * Auto-generated logo component: Info Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InfoSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InfoSquareOutlineLogo = React.forwardRef<SVGSVGElement, InfoSquareOutlineLogoProps>(
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
      <path d="M12 9h.01" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M11 12h1v4h1" />
    </svg>
  )
);

InfoSquareOutlineLogo.displayName = "InfoSquareOutlineLogo";

export const InfoSquareOutlineLogoMetadata = {
  id: "info-square-outline",
  baseId: "info-square-outline",
  variant: "default",
  name: "Info Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InfoSquareOutlineLogo;
