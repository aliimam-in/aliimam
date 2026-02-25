/**
 * Auto-generated logo component: Teapot Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TeapotOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TeapotOutlineLogo = React.forwardRef<SVGSVGElement, TeapotOutlineLogoProps>(
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
      <path d="M10.29 3h3.42a2 2 0 0 1 1.988 1.78l1.555 14a2 2 0 0 1 -1.988 2.22h-6.53a2 2 0 0 1 -1.988 -2.22l1.555 -14a2 2 0 0 1 1.988 -1.78" />
  <path d="M7.47 12.5l-4.257 -5.019a.899 .899 0 0 1 .69 -1.481h13.09a3 3 0 0 1 3.007 3v3c0 1.657 -1.346 3 -3.007 3" />
  <path d="M7 17h10" />
    </svg>
  )
);

TeapotOutlineLogo.displayName = "TeapotOutlineLogo";

export const TeapotOutlineLogoMetadata = {
  id: "teapot-outline",
  baseId: "teapot-outline",
  variant: "default",
  name: "Teapot Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TeapotOutlineLogo;
