/**
 * Auto-generated logo component: Circle Letter E (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterEFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterEFilledLogo = React.forwardRef<SVGSVGElement, CircleLetterEFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2 5h-4a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-3v-2h1.5a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-1.5v-2h3a1 1 0 0 0 0 -2" />
    </svg>
  )
);

CircleLetterEFilledLogo.displayName = "CircleLetterEFilledLogo";

export const CircleLetterEFilledLogoMetadata = {
  id: "circle-letter-e_filled",
  baseId: "circle-letter-e",
  variant: "filled",
  name: "Circle Letter E",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterEFilledLogo;
