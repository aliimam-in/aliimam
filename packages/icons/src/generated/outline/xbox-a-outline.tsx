/**
 * Auto-generated logo component: Xbox A Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XboxAOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XboxAOutlineLogo = React.forwardRef<SVGSVGElement, XboxAOutlineLogoProps>(
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
      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9" />
  <path d="M15 16l-3 -8l-3 8" />
  <path d="M14 14h-4" />
    </svg>
  )
);

XboxAOutlineLogo.displayName = "XboxAOutlineLogo";

export const XboxAOutlineLogoMetadata = {
  id: "xbox-a-outline",
  baseId: "xbox-a-outline",
  variant: "default",
  name: "Xbox A Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XboxAOutlineLogo;
