/**
 * Auto-generated logo component: List Music (default)
 * Category: list
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListMusicLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListMusicLogo = React.forwardRef<SVGSVGElement, ListMusicLogoProps>(
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
      <path d="M16 5H3" />
  <path d="M11 12H3" />
  <path d="M11 19H3" />
  <path d="M21 16V5" />
  <circle cx="18" cy="16" r="3" />
    </svg>
  )
);

ListMusicLogo.displayName = "ListMusicLogo";

export const ListMusicLogoMetadata = {
  id: "list-music",
  baseId: "list-music",
  variant: "default",
  name: "List Music",
  category: "list",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListMusicLogo;
