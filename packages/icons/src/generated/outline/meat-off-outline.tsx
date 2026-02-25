/**
 * Auto-generated logo component: Meat Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MeatOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MeatOffOutlineLogo = React.forwardRef<SVGSVGElement, MeatOffOutlineLogoProps>(
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
      <path d="M13.62 8.382l1.966 -1.967a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-1.82 1.821" />
  <path d="M5.904 18.596c2.733 2.734 5.9 4 7.07 2.829c1.172 -1.172 -.094 -4.338 -2.828 -7.071c-2.733 -2.734 -5.9 -4 -7.07 -2.829c-1.172 1.172 .094 4.338 2.828 7.071" />
  <path d="M7.5 16l1 1" />
  <path d="M12.975 21.425c1.582 -1.582 2.679 -3.407 3.242 -5.2" />
  <path d="M16.6 12.6c-.16 -1.238 -.653 -2.345 -1.504 -3.195c-.85 -.85 -1.955 -1.344 -3.192 -1.503" />
  <path d="M8.274 8.284c-1.792 .563 -3.616 1.66 -5.198 3.242" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MeatOffOutlineLogo.displayName = "MeatOffOutlineLogo";

export const MeatOffOutlineLogoMetadata = {
  id: "meat-off-outline",
  baseId: "meat-off-outline",
  variant: "default",
  name: "Meat Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MeatOffOutlineLogo;
