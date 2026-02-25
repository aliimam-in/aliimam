/**
 * Auto-generated logo component: Input Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InputCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InputCheckOutlineLogo = React.forwardRef<SVGSVGElement, InputCheckOutlineLogoProps>(
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
      <path d="M20 13v-4a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h6" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

InputCheckOutlineLogo.displayName = "InputCheckOutlineLogo";

export const InputCheckOutlineLogoMetadata = {
  id: "input-check-outline",
  baseId: "input-check-outline",
  variant: "default",
  name: "Input Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InputCheckOutlineLogo;
