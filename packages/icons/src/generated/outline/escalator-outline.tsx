/**
 * Auto-generated logo component: Escalator Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EscalatorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EscalatorOutlineLogo = React.forwardRef<SVGSVGElement, EscalatorOutlineLogoProps>(
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
      <path d="M19.5 5h-2.672a2 2 0 0 0 -1.414 .586l-8.414 8.414h-2.5a2.5 2.5 0 1 0 0 5h3.672a2 2 0 0 0 1.414 -.586l8.414 -8.414h1.5a2.5 2.5 0 0 0 0 -5" />
    </svg>
  )
);

EscalatorOutlineLogo.displayName = "EscalatorOutlineLogo";

export const EscalatorOutlineLogoMetadata = {
  id: "escalator-outline",
  baseId: "escalator-outline",
  variant: "default",
  name: "Escalator Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EscalatorOutlineLogo;
