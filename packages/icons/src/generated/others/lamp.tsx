/**
 * Auto-generated logo component: Lamp (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LampLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LampLogo = React.forwardRef<SVGSVGElement, LampLogoProps>(
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
      <path d="M12 12v6" />
  <path d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" />
  <path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />
    </svg>
  )
);

LampLogo.displayName = "LampLogo";

export const LampLogoMetadata = {
  id: "lamp",
  baseId: "lamp",
  variant: "default",
  name: "Lamp",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LampLogo;
