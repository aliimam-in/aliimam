/**
 * Auto-generated logo component: Xbox Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XboxYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XboxYOutlineLogo = React.forwardRef<SVGSVGElement, XboxYOutlineLogoProps>(
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
  <path d="M9 8l3 4" />
  <path d="M15 8l-2.988 3.984l-.012 4.016" />
    </svg>
  )
);

XboxYOutlineLogo.displayName = "XboxYOutlineLogo";

export const XboxYOutlineLogoMetadata = {
  id: "xbox-y-outline",
  baseId: "xbox-y-outline",
  variant: "default",
  name: "Xbox Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XboxYOutlineLogo;
