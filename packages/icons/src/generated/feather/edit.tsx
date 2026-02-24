/**
 * Auto-generated logo component: Edit (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EditLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EditLogo = React.forwardRef<SVGSVGElement, EditLogoProps>(
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
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  )
);

EditLogo.displayName = "EditLogo";

export const EditLogoMetadata = {
  id: "edit",
  baseId: "edit",
  variant: "default",
  name: "Edit",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EditLogo;
