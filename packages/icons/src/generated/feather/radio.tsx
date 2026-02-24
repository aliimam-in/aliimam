/**
 * Auto-generated logo component: Radio (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadioLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadioLogo = React.forwardRef<SVGSVGElement, RadioLogoProps>(
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
      <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
    </svg>
  )
);

RadioLogo.displayName = "RadioLogo";

export const RadioLogoMetadata = {
  id: "radio",
  baseId: "radio",
  variant: "default",
  name: "Radio",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadioLogo;
