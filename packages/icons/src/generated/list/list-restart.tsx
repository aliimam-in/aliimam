/**
 * Auto-generated logo component: List Restart (default)
 * Category: list
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListRestartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListRestartLogo = React.forwardRef<SVGSVGElement, ListRestartLogoProps>(
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
      <path d="M21 5H3" />
  <path d="M7 12H3" />
  <path d="M7 19H3" />
  <path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" />
  <path d="M11 10v4h4" />
    </svg>
  )
);

ListRestartLogo.displayName = "ListRestartLogo";

export const ListRestartLogoMetadata = {
  id: "list-restart",
  baseId: "list-restart",
  variant: "default",
  name: "List Restart",
  category: "list",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListRestartLogo;
