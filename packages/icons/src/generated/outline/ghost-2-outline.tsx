/**
 * Auto-generated logo component: Ghost 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Ghost2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Ghost2OutlineLogo = React.forwardRef<SVGSVGElement, Ghost2OutlineLogoProps>(
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
      <path d="M10 9h.01" />
  <path d="M14 9h.01" />
  <path d="M12 3a7 7 0 0 1 7 7v1l1 0a2 2 0 1 1 0 4l-1 0v3l2 3h-10a6 6 0 0 1 -6 -5.775l0 -.226l-1 0a2 2 0 0 1 0 -4l1 0v-1a7 7 0 0 1 7 -7l0 .001" />
  <path d="M11 14h2a1 1 0 0 0 -2 0" />
    </svg>
  )
);

Ghost2OutlineLogo.displayName = "Ghost2OutlineLogo";

export const Ghost2OutlineLogoMetadata = {
  id: "ghost-2-outline",
  baseId: "ghost-2-outline",
  variant: "default",
  name: "Ghost 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ghost2OutlineLogo;
