/**
 * Auto-generated logo component: Slashes Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SlashesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SlashesOutlineLogo = React.forwardRef<SVGSVGElement, SlashesOutlineLogoProps>(
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
      <path d="M14 5l-10 14" />
  <path d="M20 5l-10 14" />
    </svg>
  )
);

SlashesOutlineLogo.displayName = "SlashesOutlineLogo";

export const SlashesOutlineLogoMetadata = {
  id: "slashes-outline",
  baseId: "slashes-outline",
  variant: "default",
  name: "Slashes Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SlashesOutlineLogo;
