/**
 * Auto-generated logo component: Input X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InputXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InputXOutlineLogo = React.forwardRef<SVGSVGElement, InputXOutlineLogoProps>(
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
      <path d="M20 13v-4a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h7" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

InputXOutlineLogo.displayName = "InputXOutlineLogo";

export const InputXOutlineLogoMetadata = {
  id: "input-x-outline",
  baseId: "input-x-outline",
  variant: "default",
  name: "Input X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InputXOutlineLogo;
