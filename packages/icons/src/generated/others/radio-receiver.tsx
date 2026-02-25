/**
 * Auto-generated logo component: Radio Receiver (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadioReceiverLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadioReceiverLogo = React.forwardRef<SVGSVGElement, RadioReceiverLogoProps>(
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
      <path d="M5 16v2" />
  <path d="M19 16v2" />
  <rect width="20" height="8" x="2" y="8" rx="2" />
  <path d="M18 12h.01" />
    </svg>
  )
);

RadioReceiverLogo.displayName = "RadioReceiverLogo";

export const RadioReceiverLogoMetadata = {
  id: "radio-receiver",
  baseId: "radio-receiver",
  variant: "default",
  name: "Radio Receiver",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadioReceiverLogo;
