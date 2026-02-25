/**
 * Auto-generated logo component: Edit Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EditCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EditCircleOutlineLogo = React.forwardRef<SVGSVGElement, EditCircleOutlineLogoProps>(
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
      <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3" />
  <path d="M16 5l3 3" />
  <path d="M9 7.07a7 7 0 0 0 1 13.93a7 7 0 0 0 6.929 -6" />
    </svg>
  )
);

EditCircleOutlineLogo.displayName = "EditCircleOutlineLogo";

export const EditCircleOutlineLogoMetadata = {
  id: "edit-circle-outline",
  baseId: "edit-circle-outline",
  variant: "default",
  name: "Edit Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EditCircleOutlineLogo;
