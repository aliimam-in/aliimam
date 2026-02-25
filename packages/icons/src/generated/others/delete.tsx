/**
 * Auto-generated logo component: Delete (default)
 * Category: others
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
      <path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
  <path d="m12 9 6 6" />
  <path d="m18 9-6 6" />
    </svg>
  )
);

DeleteLogo.displayName = "DeleteLogo";

export const DeleteLogoMetadata = {
  id: "delete",
  baseId: "delete",
  variant: "default",
  name: "Delete",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DeleteLogo;
