/**
 * Auto-generated logo component: Ladle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LadleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LadleOutlineLogo = React.forwardRef<SVGSVGElement, LadleOutlineLogoProps>(
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
      <path d="M3 14v1a6 6 0 1 0 12 0v-9a3 3 0 0 1 6 0" />
  <path d="M9 16c-.663 0 -1.3 -.036 -1.896 -.102l-.5 -.064c-2.123 -.308 -3.604 -1.013 -3.604 -1.834c0 -.82 1.482 -1.526 3.603 -1.834l.5 -.064a17.27 17.27 0 0 1 1.897 -.102c.663 0 1.3 .036 1.896 .102l.5 .064c2.123 .308 3.604 1.013 3.604 1.834c0 .82 -1.482 1.526 -3.603 1.834l-.5 .064a17.27 17.27 0 0 1 -1.897 .102" />
    </svg>
  )
);

LadleOutlineLogo.displayName = "LadleOutlineLogo";

export const LadleOutlineLogoMetadata = {
  id: "ladle-outline",
  baseId: "ladle-outline",
  variant: "default",
  name: "Ladle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LadleOutlineLogo;
