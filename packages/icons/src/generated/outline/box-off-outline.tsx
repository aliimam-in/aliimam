/**
 * Auto-generated logo component: Box Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxOffOutlineLogo = React.forwardRef<SVGSVGElement, BoxOffOutlineLogoProps>(
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
      <path d="M17.765 17.757l-5.765 3.243l-8 -4.5v-9l2.236 -1.258m2.57 -1.445l3.194 -1.797l8 4.5v8.5" />
  <path d="M14.561 10.559l5.439 -3.059" />
  <path d="M12 12v9" />
  <path d="M12 12l-8 -4.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BoxOffOutlineLogo.displayName = "BoxOffOutlineLogo";

export const BoxOffOutlineLogoMetadata = {
  id: "box-off-outline",
  baseId: "box-off-outline",
  variant: "default",
  name: "Box Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxOffOutlineLogo;
