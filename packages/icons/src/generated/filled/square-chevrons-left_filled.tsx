/**
 * Auto-generated logo component: Square Chevrons Left (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareChevronsLeftFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareChevronsLeftFilledLogo = React.forwardRef<SVGSVGElement, SquareChevronsLeftFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-2.293 6.293a1 1 0 0 0 -1.414 0l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l3 3l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32zm-5 0a1 1 0 0 0 -1.414 0l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l3 3l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
    </svg>
  )
);

SquareChevronsLeftFilledLogo.displayName = "SquareChevronsLeftFilledLogo";

export const SquareChevronsLeftFilledLogoMetadata = {
  id: "square-chevrons-left_filled",
  baseId: "square-chevrons-left",
  variant: "filled",
  name: "Square Chevrons Left",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareChevronsLeftFilledLogo;
