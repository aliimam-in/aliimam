/**
 * Auto-generated logo component: Cards Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CardsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CardsOutlineLogo = React.forwardRef<SVGSVGElement, CardsOutlineLogoProps>(
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
      <path d="M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304l0 .001" />
  <path d="M15 4h1a1 1 0 0 1 1 1v3.5" />
  <path d="M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374" />
    </svg>
  )
);

CardsOutlineLogo.displayName = "CardsOutlineLogo";

export const CardsOutlineLogoMetadata = {
  id: "cards-outline",
  baseId: "cards-outline",
  variant: "default",
  name: "Cards Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CardsOutlineLogo;
