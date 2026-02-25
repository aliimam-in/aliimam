/**
 * Auto-generated logo component: Box Model Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxModelOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxModelOffOutlineLogo = React.forwardRef<SVGSVGElement, BoxModelOffOutlineLogoProps>(
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
      <path d="M12 8h4v4m0 4h-8v-8" />
  <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
  <path d="M16 16l3.3 3.3" />
  <path d="M16 8l3.3 -3.3" />
  <path d="M8 8l-3.3 -3.3" />
  <path d="M8 16l-3.3 3.3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BoxModelOffOutlineLogo.displayName = "BoxModelOffOutlineLogo";

export const BoxModelOffOutlineLogoMetadata = {
  id: "box-model-off-outline",
  baseId: "box-model-off-outline",
  variant: "default",
  name: "Box Model Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxModelOffOutlineLogo;
