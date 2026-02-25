/**
 * Auto-generated logo component: A B Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ABOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ABOffOutlineLogo = React.forwardRef<SVGSVGElement, ABOffOutlineLogoProps>(
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
      <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
  <path d="M12 12v6" />
  <path d="M12 6v2" />
  <path d="M16 8h3a2 2 0 1 1 0 4h-3m3 0a2 2 0 0 1 .83 3.82m-3.83 -3.82v-4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ABOffOutlineLogo.displayName = "ABOffOutlineLogo";

export const ABOffOutlineLogoMetadata = {
  id: "a-b-off-outline",
  baseId: "a-b-off-outline",
  variant: "default",
  name: "A B Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ABOffOutlineLogo;
