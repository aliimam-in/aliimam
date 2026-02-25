/**
 * Auto-generated logo component: Medal 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Medal2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Medal2OutlineLogo = React.forwardRef<SVGSVGElement, Medal2OutlineLogoProps>(
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
      <path d="M9 3h6l3 7l-6 2l-6 -2l3 -7" />
  <path d="M12 12l-3 -9" />
  <path d="M15 11l-3 -8" />
  <path d="M12 19.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5l-3 -1.5" />
    </svg>
  )
);

Medal2OutlineLogo.displayName = "Medal2OutlineLogo";

export const Medal2OutlineLogoMetadata = {
  id: "medal-2-outline",
  baseId: "medal-2-outline",
  variant: "default",
  name: "Medal 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Medal2OutlineLogo;
