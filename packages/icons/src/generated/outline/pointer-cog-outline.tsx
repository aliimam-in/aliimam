/**
 * Auto-generated logo component: Pointer Cog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointerCogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointerCogOutlineLogo = React.forwardRef<SVGSVGElement, PointerCogOutlineLogoProps>(
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
      <path d="M15.774 13.218l-.996 -.996l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l.343 .343" />
  <path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
    </svg>
  )
);

PointerCogOutlineLogo.displayName = "PointerCogOutlineLogo";

export const PointerCogOutlineLogoMetadata = {
  id: "pointer-cog-outline",
  baseId: "pointer-cog-outline",
  variant: "default",
  name: "Pointer Cog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointerCogOutlineLogo;
