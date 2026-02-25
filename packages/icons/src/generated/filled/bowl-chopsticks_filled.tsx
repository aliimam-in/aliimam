/**
 * Auto-generated logo component: Bowl Chopsticks (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BowlChopsticksFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BowlChopsticksFilledLogo = React.forwardRef<SVGSVGElement, BowlChopsticksFilledLogoProps>(
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
      <path d="M20 10a2 2 0 0 1 2 2v.5c0 1.694 -2.247 5.49 -3.983 6.983l-.017 .013v.504a2 2 0 0 1 -1.85 1.995l-.15 .005h-8a2 2 0 0 1 -2 -2v-.496l-.065 -.053c-1.76 -1.496 -3.794 -4.965 -3.928 -6.77l-.007 -.181v-.5a2 2 0 0 1 2 -2z" />
  <path d="M18.929 6.003a1 1 0 1 1 .142 1.994l-14 1a1 1 0 1 1 -.142 -1.994z" />
  <path d="M18.79 1.022a1 1 0 1 1 .42 1.956l-14 3a1 1 0 1 1 -.42 -1.956z" />
    </svg>
  )
);

BowlChopsticksFilledLogo.displayName = "BowlChopsticksFilledLogo";

export const BowlChopsticksFilledLogoMetadata = {
  id: "bowl-chopsticks_filled",
  baseId: "bowl-chopsticks",
  variant: "filled",
  name: "Bowl Chopsticks",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BowlChopsticksFilledLogo;
