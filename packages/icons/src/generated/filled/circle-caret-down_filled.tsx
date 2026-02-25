/**
 * Auto-generated logo component: Circle Caret Down (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleCaretDownFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleCaretDownFilledLogo = React.forwardRef<SVGSVGElement, CircleCaretDownFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-2 6.66h-6a1 1 0 0 0 -.708 1.707l3 3a1 1 0 0 0 1.415 0l3 -3a1 1 0 0 0 0 -1.414l-.094 -.083a1 1 0 0 0 -.613 -.21" />
    </svg>
  )
);

CircleCaretDownFilledLogo.displayName = "CircleCaretDownFilledLogo";

export const CircleCaretDownFilledLogoMetadata = {
  id: "circle-caret-down_filled",
  baseId: "circle-caret-down",
  variant: "filled",
  name: "Circle Caret Down",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleCaretDownFilledLogo;
