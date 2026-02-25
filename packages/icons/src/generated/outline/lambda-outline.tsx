/**
 * Auto-generated logo component: Lambda Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LambdaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LambdaOutlineLogo = React.forwardRef<SVGSVGElement, LambdaOutlineLogoProps>(
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
      <path d="M6 20l6.5 -9" />
  <path d="M19 20c-6 0 -6 -16 -12 -16" />
    </svg>
  )
);

LambdaOutlineLogo.displayName = "LambdaOutlineLogo";

export const LambdaOutlineLogoMetadata = {
  id: "lambda-outline",
  baseId: "lambda-outline",
  variant: "default",
  name: "Lambda Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LambdaOutlineLogo;
