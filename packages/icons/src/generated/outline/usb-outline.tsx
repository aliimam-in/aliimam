/**
 * Auto-generated logo component: Usb Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UsbOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UsbOutlineLogo = React.forwardRef<SVGSVGElement, UsbOutlineLogoProps>(
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
      <path d="M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 17v-11.5" />
  <path d="M7 10v3l5 3" />
  <path d="M12 14.5l5 -2v-2.5" />
  <path d="M16 10h2v-2h-2l0 2" />
  <path d="M6 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M10 5.5h4l-2 -2.5l-2 2.5" />
    </svg>
  )
);

UsbOutlineLogo.displayName = "UsbOutlineLogo";

export const UsbOutlineLogoMetadata = {
  id: "usb-outline",
  baseId: "usb-outline",
  variant: "default",
  name: "Usb Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UsbOutlineLogo;
