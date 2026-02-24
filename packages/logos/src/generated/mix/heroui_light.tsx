/**
 * Auto-generated logo component: Heroui (light)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HerouiLightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HerouiLight = React.forwardRef<SVGSVGElement, HerouiLightProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 74 74"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#ffff" d="M54.35.083H19.566C8.76.083 0 8.843 0 19.649v34.783C0 65.239 8.76 74 19.566 74H54.35c10.806 0 19.566-8.76 19.566-19.566V19.648C73.916 8.843 65.156.083 54.35.083Z" /><path fill="#111" d="M50.638 52.566V21.201h3.877v31.365h-3.877ZM31.731 53.22c-2.425 0-4.567-.501-6.425-1.503a11.087 11.087 0 0 1-4.378-4.204c-1.046-1.815-1.569-3.942-1.569-6.382V21.223l3.921-.022v19.604c0 1.48.247 2.773.74 3.877.509 1.089 1.177 1.996 2.005 2.722a8.61 8.61 0 0 0 2.722 1.634 9.039 9.039 0 0 0 2.984.523 8.773 8.773 0 0 0 3.006-.545 8.5 8.5 0 0 0 2.723-1.612c.827-.726 1.488-1.64 1.982-2.744.493-1.104.74-2.389.74-3.855V21.2h3.921v19.93c0 2.425-.53 4.545-1.59 6.36a10.893 10.893 0 0 1-4.356 4.226c-1.859 1.002-4 1.503-6.426 1.503Z" />
    </svg>
  )
);

HerouiLight.displayName = "HerouiLight";

export const HerouiLightMetadata = {
  id: "heroui_light",
  baseId: "heroui",
  variant: "light",
  name: "Heroui",
  category: "mix",
  tags: [],
  viewBox: "0 0 74 74",
} as const;

export default HerouiLight;
