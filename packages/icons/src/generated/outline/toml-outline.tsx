/**
 * Auto-generated logo component: Toml Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TomlOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TomlOutlineLogo = React.forwardRef<SVGSVGElement, TomlOutlineLogoProps>(
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
      <path d="M1.499 8h3" />
  <path d="M2.999 8v8" />
  <path d="M8.5 8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1 -3 0v-5a1.5 1.5 0 0 1 1.5 -1.5" />
  <path d="M13 16v-8l2 5l2 -5v8" />
  <path d="M20 8v8h2.5" />
    </svg>
  )
);

TomlOutlineLogo.displayName = "TomlOutlineLogo";

export const TomlOutlineLogoMetadata = {
  id: "toml-outline",
  baseId: "toml-outline",
  variant: "default",
  name: "Toml Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TomlOutlineLogo;
