/**
 * Auto-generated logo component: Bot Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BotOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BotOffLogo = React.forwardRef<SVGSVGElement, BotOffLogoProps>(
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
      <path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" />
  <path d="M2 14h2" />
  <path d="M20 14h2" />
  <path d="M22 22 2 2" />
  <path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" />
  <path d="M9 13v2" />
  <path d="M9.67 4H12v2.33" />
    </svg>
  )
);

BotOffLogo.displayName = "BotOffLogo";

export const BotOffLogoMetadata = {
  id: "bot-off",
  baseId: "bot-off",
  variant: "default",
  name: "Bot Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BotOffLogo;
