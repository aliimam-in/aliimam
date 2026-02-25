/**
 * Auto-generated logo component: Diamonds (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiamondsFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiamondsFilledLogo = React.forwardRef<SVGSVGElement, DiamondsFilledLogoProps>(
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
      <path d="M12 2.005c-.777 0 -1.508 .367 -1.971 .99l-5.362 6.895c-.89 1.136 -.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 0 0 3.93 -.017l5.361 -6.894c.89 -1.136 .89 -3.083 0 -4.227l-5.375 -6.911a2.446 2.446 0 0 0 -1.958 -.974z" />
    </svg>
  )
);

DiamondsFilledLogo.displayName = "DiamondsFilledLogo";

export const DiamondsFilledLogoMetadata = {
  id: "diamonds_filled",
  baseId: "diamonds",
  variant: "filled",
  name: "Diamonds",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiamondsFilledLogo;
