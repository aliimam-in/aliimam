/**
 * Auto-generated logo component: Melon Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MelonFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MelonFilledLogo = React.forwardRef<SVGSVGElement, MelonFilledLogoProps>(
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
      <path d="M16.77 2.62a1 1 0 0 1 1.436 .055a10.96 10.96 0 0 1 2.794 7.326c0 6.074 -4.925 10.999 -10.999 10.999a10.97 10.97 0 0 1 -7.684 -3.127a1 1 0 0 1 .008 -1.438l4.343 -4.153a1 1 0 0 1 1.352 -.027a3 3 0 0 0 4.32 -4.133a1 1 0 0 1 .088 -1.35z" />
    </svg>
  )
);

MelonFilledLogo.displayName = "MelonFilledLogo";

export const MelonFilledLogoMetadata = {
  id: "melon-filled",
  baseId: "melon-filled",
  variant: "default",
  name: "Melon Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MelonFilledLogo;
