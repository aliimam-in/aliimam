/**
 * Auto-generated logo component: Badge Cc Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeCcFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeCcFilledLogo = React.forwardRef<SVGSVGElement, BadgeCcFilledLogoProps>(
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
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-10.5 4a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5m7 0a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5" />
    </svg>
  )
);

BadgeCcFilledLogo.displayName = "BadgeCcFilledLogo";

export const BadgeCcFilledLogoMetadata = {
  id: "badge-cc-filled",
  baseId: "badge-cc-filled",
  variant: "default",
  name: "Badge Cc Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeCcFilledLogo;
