/**
 * Auto-generated logo component: Circle Letter J (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterJFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterJFilledLogo = React.forwardRef<SVGSVGElement, CircleLetterJFilledLogoProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2 5h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h3v5a1 1 0 0 1 -1.993 .117l-.007 -.117a1 1 0 0 0 -2 0a3 3 0 0 0 6 0v-6a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

CircleLetterJFilledLogo.displayName = "CircleLetterJFilledLogo";

export const CircleLetterJFilledLogoMetadata = {
  id: "circle-letter-j_filled",
  baseId: "circle-letter-j",
  variant: "filled",
  name: "Circle Letter J",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterJFilledLogo;
