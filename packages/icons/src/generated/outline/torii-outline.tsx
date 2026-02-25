/**
 * Auto-generated logo component: Torii Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ToriiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ToriiOutlineLogo = React.forwardRef<SVGSVGElement, ToriiOutlineLogoProps>(
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
      <path d="M4 4c5.333 1.333 10.667 1.333 16 0" />
  <path d="M4 8h16" />
  <path d="M12 5v3" />
  <path d="M18 4.5v15.5" />
  <path d="M6 4.5v15.5" />
    </svg>
  )
);

ToriiOutlineLogo.displayName = "ToriiOutlineLogo";

export const ToriiOutlineLogoMetadata = {
  id: "torii-outline",
  baseId: "torii-outline",
  variant: "default",
  name: "Torii Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ToriiOutlineLogo;
