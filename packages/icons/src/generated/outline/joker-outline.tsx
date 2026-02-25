/**
 * Auto-generated logo component: Joker Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface JokerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const JokerOutlineLogo = React.forwardRef<SVGSVGElement, JokerOutlineLogoProps>(
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
      <path d="M5 17.5a1.5 1.5 0 0 1 1.5 -1.5h11a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1 -1.5 1.5h-11a1.5 1.5 0 0 1 -1.5 -1.5" />
  <path d="M12 16q -2.5 -8 -6 -8q -2.5 0 -3 2c2.953 .31 3.308 3.33 4 6" />
  <path d="M12 16q 2.5 -8 6 -8q 2.5 0 3 2c-2.953 .31 -3.308 3.33 -4 6" />
  <path d="M9 9.5q 2 -3.5 3 -3.5t 3 3.5" />
    </svg>
  )
);

JokerOutlineLogo.displayName = "JokerOutlineLogo";

export const JokerOutlineLogoMetadata = {
  id: "joker-outline",
  baseId: "joker-outline",
  variant: "default",
  name: "Joker Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default JokerOutlineLogo;
