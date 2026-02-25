/**
 * Auto-generated logo component: Escalator (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EscalatorFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EscalatorFilledLogo = React.forwardRef<SVGSVGElement, EscalatorFilledLogoProps>(
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
      <path d="M19.5 4a3.5 3.5 0 0 1 0 7h-1.086l-8.12 8.121a3 3 0 0 1 -1.924 .872l-.198 .007h-3.672a3.5 3.5 0 0 1 0 -7h2.084l8.123 -8.121a3 3 0 0 1 1.923 -.872l.198 -.007z" />
    </svg>
  )
);

EscalatorFilledLogo.displayName = "EscalatorFilledLogo";

export const EscalatorFilledLogoMetadata = {
  id: "escalator_filled",
  baseId: "escalator",
  variant: "filled",
  name: "Escalator",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EscalatorFilledLogo;
