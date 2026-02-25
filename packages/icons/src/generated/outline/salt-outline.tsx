/**
 * Auto-generated logo component: Salt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SaltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SaltOutlineLogo = React.forwardRef<SVGSVGElement, SaltOutlineLogoProps>(
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
      <path d="M12 13v.01" />
  <path d="M10 16v.01" />
  <path d="M14 16v.01" />
  <path d="M7.5 8h9l-.281 -2.248a2 2 0 0 0 -1.985 -1.752h-4.468a2 2 0 0 0 -1.986 1.752l-.28 2.248" />
  <path d="M7.5 8l-1.612 9.671a2 2 0 0 0 1.973 2.329h8.278a2 2 0 0 0 1.973 -2.329l-1.612 -9.671" />
    </svg>
  )
);

SaltOutlineLogo.displayName = "SaltOutlineLogo";

export const SaltOutlineLogoMetadata = {
  id: "salt-outline",
  baseId: "salt-outline",
  variant: "default",
  name: "Salt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SaltOutlineLogo;
