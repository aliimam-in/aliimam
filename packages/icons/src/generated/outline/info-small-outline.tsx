/**
 * Auto-generated logo component: Info Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InfoSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InfoSmallOutlineLogo = React.forwardRef<SVGSVGElement, InfoSmallOutlineLogoProps>(
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
    </svg>
  )
);

InfoSmallOutlineLogo.displayName = "InfoSmallOutlineLogo";

export const InfoSmallOutlineLogoMetadata = {
  id: "info-small-outline",
  baseId: "info-small-outline",
  variant: "default",
  name: "Info Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InfoSmallOutlineLogo;
