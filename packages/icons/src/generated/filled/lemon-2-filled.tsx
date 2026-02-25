/**
 * Auto-generated logo component: Lemon 2 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Lemon2FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Lemon2FilledLogo = React.forwardRef<SVGSVGElement, Lemon2FilledLogoProps>(
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
      <path d="M18 3a3 3 0 0 1 2.443 4.742l-.06 .076l.037 .087c1.269 3.187 .428 7.084 -2.203 9.872l-.217 .223c-2.8 2.8 -6.823 3.723 -10.095 2.42l-.087 -.036l-.133 .098a3 3 0 0 1 -2.11 .488l-.205 -.036a3 3 0 0 1 -1.852 -4.62l.098 -.134l-.036 -.085c-1.269 -3.187 -.428 -7.084 2.203 -9.872l.217 -.223c2.8 -2.8 6.823 -3.723 10.095 -2.42l.085 .037l.124 -.091a3 3 0 0 1 1.493 -.52z" />
    </svg>
  )
);

Lemon2FilledLogo.displayName = "Lemon2FilledLogo";

export const Lemon2FilledLogoMetadata = {
  id: "lemon-2-filled",
  baseId: "lemon-2-filled",
  variant: "default",
  name: "Lemon 2 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Lemon2FilledLogo;
