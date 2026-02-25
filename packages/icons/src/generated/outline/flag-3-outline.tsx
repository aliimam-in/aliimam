/**
 * Auto-generated logo component: Flag 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Flag3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Flag3OutlineLogo = React.forwardRef<SVGSVGElement, Flag3OutlineLogoProps>(
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
      <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
    </svg>
  )
);

Flag3OutlineLogo.displayName = "Flag3OutlineLogo";

export const Flag3OutlineLogoMetadata = {
  id: "flag-3-outline",
  baseId: "flag-3-outline",
  variant: "default",
  name: "Flag 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flag3OutlineLogo;
