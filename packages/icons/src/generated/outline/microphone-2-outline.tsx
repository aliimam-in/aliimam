/**
 * Auto-generated logo component: Microphone 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Microphone2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Microphone2OutlineLogo = React.forwardRef<SVGSVGElement, Microphone2OutlineLogoProps>(
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
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
  <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515" />
    </svg>
  )
);

Microphone2OutlineLogo.displayName = "Microphone2OutlineLogo";

export const Microphone2OutlineLogoMetadata = {
  id: "microphone-2-outline",
  baseId: "microphone-2-outline",
  variant: "default",
  name: "Microphone 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Microphone2OutlineLogo;
