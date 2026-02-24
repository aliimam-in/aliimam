/**
 * Auto-generated logo component: Delete (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DeleteLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DeleteLogo = React.forwardRef<SVGSVGElement, DeleteLogoProps>(
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
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/>
    </svg>
  )
);

DeleteLogo.displayName = "DeleteLogo";

export const DeleteLogoMetadata = {
  id: "delete",
  baseId: "delete",
  variant: "default",
  name: "Delete",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeleteLogo;
