/**
 * Auto-generated logo component: Better Auth (dark)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BetterAuthDarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BetterAuthDark = React.forwardRef<SVGSVGElement, BetterAuthDarkProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="M0 0h500v500H0z" /><path fill="#000" d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z" /><path fill="#000" d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z" /><path fill="#000" d="M252.762 204.455v92.089h-96.774v-92.089z" />
    </svg>
  )
);

BetterAuthDark.displayName = "BetterAuthDark";

export const BetterAuthDarkMetadata = {
  id: "better-auth_dark",
  baseId: "better-auth",
  variant: "dark",
  name: "Better Auth",
  category: "mix",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default BetterAuthDark;
