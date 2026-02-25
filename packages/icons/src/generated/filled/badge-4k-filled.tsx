/**
 * Auto-generated logo component: Badge 4k Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Badge4kFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Badge4kFilledLogo = React.forwardRef<SVGSVGElement, Badge4kFilledLogoProps>(
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
      <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-9 4a1 1 0 0 0 -1 1v2h-1v-2a1 1 0 1 0 -2 0v2a2 2 0 0 0 2 2h1v2a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1m7.555 .168a1 1 0 0 0 -1.387 .277l-1.168 1.751v-1.196a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-1.196l1.168 1.75a1 1 0 0 0 1.286 .337l.1 -.059l.094 -.07a1 1 0 0 0 .184 -1.317l-1.63 -2.445l1.63 -2.445a1 1 0 0 0 -.277 -1.387" />
    </svg>
  )
);

Badge4kFilledLogo.displayName = "Badge4kFilledLogo";

export const Badge4kFilledLogoMetadata = {
  id: "badge-4k-filled",
  baseId: "badge-4k-filled",
  variant: "default",
  name: "Badge 4k Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Badge4kFilledLogo;
