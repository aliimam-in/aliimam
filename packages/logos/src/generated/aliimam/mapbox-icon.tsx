/**
 * Auto-generated logo component: Mapbox Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapboxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MapboxIcon = React.forwardRef<SVGSVGElement, MapboxIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 254"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M128,0 C198.695163,0 256,56.688374 256,126.623027 C256,196.557679 198.695163,253.246053 128,253.246053 C57.3048369,253.246053 0,196.557679 0,126.623027 C0,56.688374 57.3048369,0 128,0 Z M186.744657,68.5103213 C161.259842,43.4420956 120.944882,42.4450639 96.6119236,66.516258 C53.575703,109.089512 66.2664494,184.082647 66.7912938,187.065343 L66.807649,187.157094 C66.807649,187.157094 144.989876,200.973105 188.760405,157.673442 C213.093363,133.602248 212.229471,93.5785471 186.744657,68.5103213 Z M142.686164,74.2076454 L155.212598,99.7031703 L180.985376,112.09485 L155.212598,124.48653 L142.686164,149.982055 L130.15973,124.48653 L104.386952,112.09485 L130.15973,99.7031703 L142.686164,74.2076454 Z" fill="#485160"></path>
    </g>
    </svg>
  )
);

MapboxIcon.displayName = "MapboxIcon";

export const MapboxIconMetadata = {
  id: "mapbox-icon",
  baseId: "mapbox-icon",
  variant: "default",
  name: "Mapbox Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 254",
} as const;

export default MapboxIcon;
