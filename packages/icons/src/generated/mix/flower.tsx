/**
 * Auto-generated logo component: Flower (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlowerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlowerLogo = React.forwardRef<SVGSVGElement, FlowerLogoProps>(
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
      <circle cx="12" cy="12" r="3" />
  <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
  <path d="M12 7.5V9" />
  <path d="M7.5 12H9" />
  <path d="M16.5 12H15" />
  <path d="M12 16.5V15" />
  <path d="m8 8 1.88 1.88" />
  <path d="M14.12 9.88 16 8" />
  <path d="m8 16 1.88-1.88" />
  <path d="M14.12 14.12 16 16" />
    </svg>
  )
);

FlowerLogo.displayName = "FlowerLogo";

export const FlowerLogoMetadata = {
  id: "flower",
  baseId: "flower",
  variant: "default",
  name: "Flower",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlowerLogo;
