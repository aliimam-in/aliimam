/**
 * Auto-generated logo component: Color Picker Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ColorPickerOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ColorPickerOffOutlineLogo = React.forwardRef<SVGSVGElement, ColorPickerOffOutlineLogoProps>(
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
  <path d="M12 8l3.699 -3.699a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-3.702 3.702m-2 2l-6 6h-4v-4l6 -6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ColorPickerOffOutlineLogo.displayName = "ColorPickerOffOutlineLogo";

export const ColorPickerOffOutlineLogoMetadata = {
  id: "color-picker-off-outline",
  baseId: "color-picker-off-outline",
  variant: "default",
  name: "Color Picker Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ColorPickerOffOutlineLogo;
