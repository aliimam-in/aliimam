/**
 * Auto-generated logo component: Hexagon Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonOffOutlineLogo = React.forwardRef<SVGSVGElement, HexagonOffOutlineLogoProps>(
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
      <path d="M8.693 4.69l2.336 -1.39a2.056 2.056 0 0 1 2 0l6 3.573h-.029a2 2 0 0 1 1 1.747v6.536c0 .246 -.045 .485 -.13 .707m-2.16 1.847l-4.739 3.027a2 2 0 0 1 -1.942 0l-6 -3.833a2 2 0 0 1 -1.029 -1.747v-6.537a2 2 0 0 1 1.029 -1.748l1.154 -.687" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HexagonOffOutlineLogo.displayName = "HexagonOffOutlineLogo";

export const HexagonOffOutlineLogoMetadata = {
  id: "hexagon-off-outline",
  baseId: "hexagon-off-outline",
  variant: "default",
  name: "Hexagon Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonOffOutlineLogo;
