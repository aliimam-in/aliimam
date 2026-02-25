/**
 * Auto-generated logo component: Slash Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SlashOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SlashOutlineLogo = React.forwardRef<SVGSVGElement, SlashOutlineLogoProps>(
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
      <path d="M17 5l-10 14" />
    </svg>
  )
);

SlashOutlineLogo.displayName = "SlashOutlineLogo";

export const SlashOutlineLogoMetadata = {
  id: "slash-outline",
  baseId: "slash-outline",
  variant: "default",
  name: "Slash Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SlashOutlineLogo;
