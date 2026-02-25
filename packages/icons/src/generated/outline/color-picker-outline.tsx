/**
 * Auto-generated logo component: Color Picker Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColorPickerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ColorPickerOutlineLogo = React.forwardRef<SVGSVGElement, ColorPickerOutlineLogoProps>(
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
      <path d="M11 7l6 6" />
  <path d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4" />
    </svg>
  )
);

ColorPickerOutlineLogo.displayName = "ColorPickerOutlineLogo";

export const ColorPickerOutlineLogoMetadata = {
  id: "color-picker-outline",
  baseId: "color-picker-outline",
  variant: "default",
  name: "Color Picker Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ColorPickerOutlineLogo;
