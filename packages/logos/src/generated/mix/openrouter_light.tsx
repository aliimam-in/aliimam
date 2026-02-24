/**
 * Auto-generated logo component: Openrouter (light)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface OpenrouterLightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const OpenrouterLight = React.forwardRef<SVGSVGElement, OpenrouterLightProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 512 512"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_205_3)">
    <path d="M3 248.945C18 248.945 76 236 106 219C136 202 136 202 198 158C276.497 102.293 332 120.945 423 120.945" strokeWidth="90" />
    <path d="M511 121.5L357.25 210.268L357.25 32.7324L511 121.5Z" />
    <path d="M0 249C15 249 73 261.945 103 278.945C133 295.945 133 295.945 195 339.945C273.497 395.652 329 377 420 377" strokeWidth="90" />
    <path d="M508 376.445L354.25 287.678L354.25 465.213L508 376.445Z" />
  </g>
    </svg>
  )
);

OpenrouterLight.displayName = "OpenrouterLight";

export const OpenrouterLightMetadata = {
  id: "openrouter_light",
  baseId: "openrouter",
  variant: "light",
  name: "Openrouter",
  category: "mix",
  tags: [],
  viewBox: "0 0 512 512",
} as const;

export default OpenrouterLight;
