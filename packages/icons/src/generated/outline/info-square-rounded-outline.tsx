/**
 * Auto-generated logo component: Info Square Rounded Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InfoSquareRoundedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InfoSquareRoundedOutlineLogo = React.forwardRef<SVGSVGElement, InfoSquareRoundedOutlineLogoProps>(
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
  <path d="M11 12h1v4h1" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

InfoSquareRoundedOutlineLogo.displayName = "InfoSquareRoundedOutlineLogo";

export const InfoSquareRoundedOutlineLogoMetadata = {
  id: "info-square-rounded-outline",
  baseId: "info-square-rounded-outline",
  variant: "default",
  name: "Info Square Rounded Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InfoSquareRoundedOutlineLogo;
