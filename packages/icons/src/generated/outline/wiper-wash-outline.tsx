/**
 * Auto-generated logo component: Wiper Wash Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WiperWashOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WiperWashOutlineLogo = React.forwardRef<SVGSVGElement, WiperWashOutlineLogoProps>(
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
      <path d="M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
  <path d="M12 20l0 -14" />
  <path d="M4 6a4 4 0 0 1 .4 -1.8" />
  <path d="M7 2.1a4 4 0 0 1 2 0" />
  <path d="M12 6a4 4 0 0 0 -.4 -1.8" />
  <path d="M12 6a4 4 0 0 1 .4 -1.8" />
  <path d="M15 2.1a4 4 0 0 1 2 0" />
  <path d="M20 6a4 4 0 0 0 -.4 -1.8" />
    </svg>
  )
);

WiperWashOutlineLogo.displayName = "WiperWashOutlineLogo";

export const WiperWashOutlineLogoMetadata = {
  id: "wiper-wash-outline",
  baseId: "wiper-wash-outline",
  variant: "default",
  name: "Wiper Wash Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WiperWashOutlineLogo;
