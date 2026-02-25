/**
 * Auto-generated logo component: Minus Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MinusVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MinusVerticalOutlineLogo = React.forwardRef<SVGSVGElement, MinusVerticalOutlineLogoProps>(
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
      <path d="M12 5v14" />
    </svg>
  )
);

MinusVerticalOutlineLogo.displayName = "MinusVerticalOutlineLogo";

export const MinusVerticalOutlineLogoMetadata = {
  id: "minus-vertical-outline",
  baseId: "minus-vertical-outline",
  variant: "default",
  name: "Minus Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MinusVerticalOutlineLogo;
