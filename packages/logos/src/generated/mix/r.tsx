/**
 * Auto-generated logo component: R (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const RLogo = React.forwardRef<SVGSVGElement, RLogoProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#000" d="M16 25.093c-8.839 0-16-4.796-16-10.719C0 8.458 7.161 3.661 16 3.661s16 4.797 16 10.713c0 5.923-7.161 10.719-16 10.719zm2.448-17.244c-6.713 0-12.161 3.281-12.161 7.328s5.448 7.328 12.161 7.328c6.713 0 11.677-2.245 11.677-7.328 0-5.084-4.959-7.328-11.677-7.328zm5.916 12.411a11.43 11.43 0 0 1 1.537.579c.287.14.547.328.776.552.14.151.26.323.353.511l3.819 6.437h-6.172l-2.885-5.417a6.764 6.764 0 0 0-.953-1.307.994.994 0 0 0-.735-.333H18.64v7.052l-5.457.005V10.318h10.963s4.991.089 4.991 4.839a5.097 5.097 0 0 1-4.772 5.104zm-2.369-6.036h-3.307v3.063h3.307a1.515 1.515 0 0 0 1.532-1.557 1.428 1.428 0 0 0-1.532-1.505z" />
    </svg>
  )
);

RLogo.displayName = "RLogo";

export const RLogoMetadata = {
  id: "r",
  baseId: "r",
  variant: "default",
  name: "R",
  category: "mix",
  tags: [],
  viewBox: "0 0 32 32",
} as const;

export default RLogo;
