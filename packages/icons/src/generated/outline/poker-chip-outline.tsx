/**
 * Auto-generated logo component: Poker Chip Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PokerChipOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PokerChipOutlineLogo = React.forwardRef<SVGSVGElement, PokerChipOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M12 3v4" />
  <path d="M12 17v4" />
  <path d="M3 12h4" />
  <path d="M17 12h4" />
  <path d="M18.364 5.636l-2.828 2.828" />
  <path d="M8.464 15.536l-2.828 2.828" />
  <path d="M5.636 5.636l2.828 2.828" />
  <path d="M15.536 15.536l2.828 2.828" />
    </svg>
  )
);

PokerChipOutlineLogo.displayName = "PokerChipOutlineLogo";

export const PokerChipOutlineLogoMetadata = {
  id: "poker-chip-outline",
  baseId: "poker-chip-outline",
  variant: "default",
  name: "Poker Chip Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PokerChipOutlineLogo;
