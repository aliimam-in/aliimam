/**
 * Auto-generated logo component: Escalator Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EscalatorDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EscalatorDownOutlineLogo = React.forwardRef<SVGSVGElement, EscalatorDownOutlineLogoProps>(
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
      <path d="M4.5 7h2.733a2 2 0 0 1 1.337 .513l9.43 8.487h1.5a2.5 2.5 0 1 1 0 5h-2.733a2 2 0 0 1 -1.337 -.513l-9.43 -8.487h-1.5a2.5 2.5 0 1 1 0 -5" />
  <path d="M18 3v7" />
  <path d="M15 7l3 3l3 -3" />
    </svg>
  )
);

EscalatorDownOutlineLogo.displayName = "EscalatorDownOutlineLogo";

export const EscalatorDownOutlineLogoMetadata = {
  id: "escalator-down-outline",
  baseId: "escalator-down-outline",
  variant: "default",
  name: "Escalator Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EscalatorDownOutlineLogo;
