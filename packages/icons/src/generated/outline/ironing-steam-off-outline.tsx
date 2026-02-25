/**
 * Auto-generated logo component: Ironing Steam Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface IroningSteamOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const IroningSteamOffOutlineLogo = React.forwardRef<SVGSVGElement, IroningSteamOffOutlineLogoProps>(
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
      <path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.821 1.15" />
  <path d="M16 16h-13a7 7 0 0 1 6.056 -6.937" />
  <path d="M13 9h6.8" />
  <path d="M12 19v2" />
  <path d="M8 19l-1 2" />
  <path d="M16 19l1 2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

IroningSteamOffOutlineLogo.displayName = "IroningSteamOffOutlineLogo";

export const IroningSteamOffOutlineLogoMetadata = {
  id: "ironing-steam-off-outline",
  baseId: "ironing-steam-off-outline",
  variant: "default",
  name: "Ironing Steam Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default IroningSteamOffOutlineLogo;
