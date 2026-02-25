/**
 * Auto-generated logo component: Chess Bishop Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChessBishopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChessBishopOutlineLogo = React.forwardRef<SVGSVGElement, ChessBishopOutlineLogoProps>(
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
      <path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8" />
  <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M9.5 16c-1.667 0 -2.5 -1.669 -2.5 -3c0 -3.667 1.667 -6 5 -7c3.333 1 5 3.427 5 7c0 1.284 -.775 2.881 -2.325 3l-.175 0h-5" />
  <path d="M15 8l-3 3" />
  <path d="M12 5v1" />
    </svg>
  )
);

ChessBishopOutlineLogo.displayName = "ChessBishopOutlineLogo";

export const ChessBishopOutlineLogoMetadata = {
  id: "chess-bishop-outline",
  baseId: "chess-bishop-outline",
  variant: "default",
  name: "Chess Bishop Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChessBishopOutlineLogo;
