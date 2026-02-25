/**
 * Auto-generated logo component: Unitjs (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UnitjsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Unitjs = React.forwardRef<SVGSVGElement, UnitjsProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 269"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <path id="path-1" d="M139.789,0 L137.309,1.431 L137.309,21.83 L41.416,77.194 L41.416,91.255 L33.197,77.194 L0,133.989 L23.577,133.989 L23.577,201.284 L139.789,268.379 L256,201.284 L256,67.095 L139.789,0"></path>
    </defs>
	<g>
		<mask id="mask-2" fill="white">
			<use href="#path-1"></use>
		</mask>
		<use id="Mask" fill="#A4D43A" href="#path-1"></use>
		<path d="M35.577,73.823 L139.789,13.656 L244,73.823 L244,194.156 L139.789,254.322 L35.577,194.156 L35.577,73.823" id="Fill-2" fill="#62655D" mask="url(#mask-2)"></path>
		<path d="M139.789,20.398 L41.416,77.194 L41.416,190.785 L139.789,247.58 L139.789,20.398" id="Fill-3" fill="#3F4238" mask="url(#mask-2)"></path>
		<path d="M139.789,0 L137.309,1.431 L137.309,22.061 L140.189,20.398 L238.561,77.194 L238.561,190.785 L140.189,247.58 L41.816,190.785 L41.816,133.989 L66.395,133.989 L33.197,77.194 L0,133.989 L23.577,133.989 L23.577,201.284 L139.789,268.379 L256,201.284 L256,67.095 L139.789,0" id="Fill-4" fill="#A4D43A" mask="url(#mask-2)"></path>
		<path d="M78.327,139.189 L126.056,119.191 C126.056,119.191 136.148,153.346 141.255,159.454 C184.185,93.726 224.715,78.394 224.715,78.394 L224.715,129.59 C224.715,129.59 184.499,150.067 137.255,202.117 C111.591,156.988 78.327,139.189 78.327,139.189" id="Fill-5" fill="#F7F7F7" mask="url(#mask-2)"></path>
	</g>
    </svg>
  )
);

Unitjs.displayName = "Unitjs";

export const UnitjsMetadata = {
  id: "unitjs",
  baseId: "unitjs",
  variant: "default",
  name: "Unitjs",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 269",
} as const;

export default Unitjs;
