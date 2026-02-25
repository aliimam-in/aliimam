/**
 * Auto-generated logo component: Dog Bowl Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DogBowlOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DogBowlOutlineLogo = React.forwardRef<SVGSVGElement, DogBowlOutlineLogoProps>(
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
      <path d="M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586" />
  <path d="M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586" />
  <path d="M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5" />
    </svg>
  )
);

DogBowlOutlineLogo.displayName = "DogBowlOutlineLogo";

export const DogBowlOutlineLogoMetadata = {
  id: "dog-bowl-outline",
  baseId: "dog-bowl-outline",
  variant: "default",
  name: "Dog Bowl Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DogBowlOutlineLogo;
