/**
 * Auto-generated logo component: Circle Letter K (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterKFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterKFilledLogo = React.forwardRef<SVGSVGElement, CircleLetterKFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2.53 5.152a1 1 0 0 0 -1.378 .318l-2.152 3.443v-2.913a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v8a1 1 0 0 0 2 0v-2.914l2.152 3.444a1 1 0 0 0 1.276 .374l.102 -.056l.095 -.068a1 1 0 0 0 .223 -1.31l-2.17 -3.47l2.17 -3.47a1 1 0 0 0 -.318 -1.378" />
    </svg>
  )
);

CircleLetterKFilledLogo.displayName = "CircleLetterKFilledLogo";

export const CircleLetterKFilledLogoMetadata = {
  id: "circle-letter-k_filled",
  baseId: "circle-letter-k",
  variant: "filled",
  name: "Circle Letter K",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterKFilledLogo;
