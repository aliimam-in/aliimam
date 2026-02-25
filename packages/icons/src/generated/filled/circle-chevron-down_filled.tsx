/**
 * Auto-generated logo component: Circle Chevron Down (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronDownFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronDownFilledLogo = React.forwardRef<SVGSVGElement, CircleChevronDownFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10a10 10 0 1 1 0 -20m-2.293 8.293a1 1 0 0 0 -1.414 1.414l3 3a1 1 0 0 0 1.414 0l3 -3a1 1 0 0 0 0 -1.414l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.294 2.292z" />
    </svg>
  )
);

CircleChevronDownFilledLogo.displayName = "CircleChevronDownFilledLogo";

export const CircleChevronDownFilledLogoMetadata = {
  id: "circle-chevron-down_filled",
  baseId: "circle-chevron-down",
  variant: "filled",
  name: "Circle Chevron Down",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronDownFilledLogo;
