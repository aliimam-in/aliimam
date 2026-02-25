/**
 * Auto-generated logo component: Lock Password Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LockPasswordOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LockPasswordOutlineLogo = React.forwardRef<SVGSVGElement, LockPasswordOutlineLogoProps>(
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
      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6" />
  <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  <path d="M15 16h.01" />
  <path d="M12.01 16h.01" />
  <path d="M9.02 16h.01" />
    </svg>
  )
);

LockPasswordOutlineLogo.displayName = "LockPasswordOutlineLogo";

export const LockPasswordOutlineLogoMetadata = {
  id: "lock-password-outline",
  baseId: "lock-password-outline",
  variant: "default",
  name: "Lock Password Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LockPasswordOutlineLogo;
