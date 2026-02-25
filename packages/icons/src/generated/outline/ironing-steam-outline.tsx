/**
 * Auto-generated logo component: Ironing Steam Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IroningSteamOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IroningSteamOutlineLogo = React.forwardRef<SVGSVGElement, IroningSteamOutlineLogoProps>(
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
      <path d="M12 19v2" />
  <path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8" />
  <path d="M8 19l-1 2" />
  <path d="M16 19l1 2" />
    </svg>
  )
);

IroningSteamOutlineLogo.displayName = "IroningSteamOutlineLogo";

export const IroningSteamOutlineLogoMetadata = {
  id: "ironing-steam-outline",
  baseId: "ironing-steam-outline",
  variant: "default",
  name: "Ironing Steam Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IroningSteamOutlineLogo;
