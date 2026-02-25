/**
 * Auto-generated logo component: Forbid 2 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Forbid2FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Forbid2FilledLogo = React.forwardRef<SVGSVGElement, Forbid2FilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 4.953a1 1 0 0 0 -1.414 0l-6 6l-.083 .094a1 1 0 0 0 1.497 1.32l6 -6l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
    </svg>
  )
);

Forbid2FilledLogo.displayName = "Forbid2FilledLogo";

export const Forbid2FilledLogoMetadata = {
  id: "forbid-2-filled",
  baseId: "forbid-2-filled",
  variant: "default",
  name: "Forbid 2 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Forbid2FilledLogo;
