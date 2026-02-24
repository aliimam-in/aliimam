/**
 * Auto-generated logo component: Radix Ui (light)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadixUiLightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const RadixUiLight = React.forwardRef<SVGSVGElement, RadixUiLightProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="4 0 17 25"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#121212" />
    </svg>
  )
);

RadixUiLight.displayName = "RadixUiLight";

export const RadixUiLightMetadata = {
  id: "radix-ui_light",
  baseId: "radix-ui",
  variant: "light",
  name: "Radix Ui",
  category: "mix",
  tags: [],
  viewBox: "4 0 17 25",
} as const;

export default RadixUiLight;
