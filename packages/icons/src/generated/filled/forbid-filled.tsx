/**
 * Auto-generated logo component: Forbid Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ForbidFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ForbidFilledLogo = React.forwardRef<SVGSVGElement, ForbidFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-7.387 4.87a1 1 0 0 0 -1.32 1.497l6 6l.094 .083a1 1 0 0 0 1.32 -1.497l-6 -6z" />
    </svg>
  )
);

ForbidFilledLogo.displayName = "ForbidFilledLogo";

export const ForbidFilledLogoMetadata = {
  id: "forbid-filled",
  baseId: "forbid-filled",
  variant: "default",
  name: "Forbid Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ForbidFilledLogo;
