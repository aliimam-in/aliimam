/**
 * Auto-generated logo component: List Video (default)
 * Category: list
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ListVideoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ListVideoLogo = React.forwardRef<SVGSVGElement, ListVideoLogoProps>(
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
  <path d="M10 12H3" />
  <path d="M10 19H3" />
  <path d="M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
    </svg>
  )
);

ListVideoLogo.displayName = "ListVideoLogo";

export const ListVideoLogoMetadata = {
  id: "list-video",
  baseId: "list-video",
  variant: "default",
  name: "List Video",
  category: "list",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ListVideoLogo;
