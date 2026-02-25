/**
 * Auto-generated logo component: Box Align Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxAlignLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxAlignLeftOutlineLogo = React.forwardRef<SVGSVGElement, BoxAlignLeftOutlineLogoProps>(
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
      <path d="M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5" />
  <path d="M15.002 20.003h-.01" />
  <path d="M20.003 20.003h-.011" />
  <path d="M20.003 15.002h-.011" />
  <path d="M20.003 9.002h-.011" />
  <path d="M20.003 4.002h-.011" />
  <path d="M15.002 4.002h-.01" />
    </svg>
  )
);

BoxAlignLeftOutlineLogo.displayName = "BoxAlignLeftOutlineLogo";

export const BoxAlignLeftOutlineLogoMetadata = {
  id: "box-align-left-outline",
  baseId: "box-align-left-outline",
  variant: "default",
  name: "Box Align Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxAlignLeftOutlineLogo;
