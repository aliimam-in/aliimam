/**
 * Auto-generated logo component: React Wheel Picker (light)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ReactWheelPickerLightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ReactWheelPickerLight = React.forwardRef<SVGSVGElement, ReactWheelPickerLightProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#000" d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.069 64.069 0 0 0 64 64h32a64.068 64.068 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64Zm2.34 146.34a8.004 8.004 0 0 1 11.32 11.32l-24 24a7.986 7.986 0 0 1-5.66 2.346 8 8 0 0 1-5.66-2.346l-24-24a8.004 8.004 0 1 1 11.32-11.32L120 172.69V83.31l-10.34 10.35a8.004 8.004 0 1 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8.005 8.005 0 0 1-11.32 11.32L136 83.31v89.38l10.34-10.35Z" />
    </svg>
  )
);

ReactWheelPickerLight.displayName = "ReactWheelPickerLight";

export const ReactWheelPickerLightMetadata = {
  id: "react-wheel-picker_light",
  baseId: "react-wheel-picker",
  variant: "light",
  name: "React Wheel Picker",
  category: "mix",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default ReactWheelPickerLight;
