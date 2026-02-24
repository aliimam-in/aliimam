/**
 * Auto-generated logo component: Popsicle (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PopsicleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PopsicleLogo = React.forwardRef<SVGSVGElement, PopsicleLogoProps>(
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
      <path d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" />
  <path d="m22 22-5.5-5.5" />
    </svg>
  )
);

PopsicleLogo.displayName = "PopsicleLogo";

export const PopsicleLogoMetadata = {
  id: "popsicle",
  baseId: "popsicle",
  variant: "default",
  name: "Popsicle",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PopsicleLogo;
