/**
 * Auto-generated logo component: Snowman Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SnowmanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SnowmanOutlineLogo = React.forwardRef<SVGSVGElement, SnowmanOutlineLogoProps>(
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
      <path d="M12 3a4 4 0 0 1 2.906 6.75a6 6 0 1 1 -5.81 0a4 4 0 0 1 2.904 -6.75" />
  <path d="M17.5 11.5l2.5 -1.5" />
  <path d="M6.5 11.5l-2.5 -1.5" />
  <path d="M12 13h.01" />
  <path d="M12 16h.01" />
    </svg>
  )
);

SnowmanOutlineLogo.displayName = "SnowmanOutlineLogo";

export const SnowmanOutlineLogoMetadata = {
  id: "snowman-outline",
  baseId: "snowman-outline",
  variant: "default",
  name: "Snowman Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SnowmanOutlineLogo;
