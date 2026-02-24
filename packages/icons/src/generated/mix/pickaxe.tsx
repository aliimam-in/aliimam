/**
 * Auto-generated logo component: Pickaxe (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PickaxeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PickaxeLogo = React.forwardRef<SVGSVGElement, PickaxeLogoProps>(
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
      <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" />
  <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024" />
  <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069" />
  <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" />
    </svg>
  )
);

PickaxeLogo.displayName = "PickaxeLogo";

export const PickaxeLogoMetadata = {
  id: "pickaxe",
  baseId: "pickaxe",
  variant: "default",
  name: "Pickaxe",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PickaxeLogo;
