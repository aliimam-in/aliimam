/**
 * Auto-generated logo component: Edit Circle Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EditCircleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EditCircleOffOutlineLogo = React.forwardRef<SVGSVGElement, EditCircleOffOutlineLogoProps>(
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
      <path d="M10.507 10.498l-1.507 1.502v3h3l1.493 -1.498m2 -2.01l4.89 -4.907a2.1 2.1 0 0 0 -2.97 -2.97l-4.913 4.896" />
  <path d="M16 5l3 3" />
  <path d="M7.476 7.471a7 7 0 0 0 2.524 13.529a7 7 0 0 0 6.53 -4.474" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

EditCircleOffOutlineLogo.displayName = "EditCircleOffOutlineLogo";

export const EditCircleOffOutlineLogoMetadata = {
  id: "edit-circle-off-outline",
  baseId: "edit-circle-off-outline",
  variant: "default",
  name: "Edit Circle Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EditCircleOffOutlineLogo;
