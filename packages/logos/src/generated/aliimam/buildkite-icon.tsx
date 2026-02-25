/**
 * Auto-generated logo component: Buildkite Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildkiteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BuildkiteIcon = React.forwardRef<SVGSVGElement, BuildkiteIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 171"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
				<polygon fill="#30F2A2" points="0 0 85.3333333 41.8133333 85.3333333 127.146667 0 85.3333333"></polygon>
				<polygon fill="#30F2A2" points="171.52 7.10542736e-15 256 41.8133333 171.52 85.3333333"></polygon>
				<polygon fill="#14CC80" points="171.52 0 85.3333333 41.8133333 85.3333333 127.146667 171.52 85.3333333"></polygon>
				<polygon fill="#14CC80" points="256 41.8133333 171.52 85.3333333 171.52 170.666667 256 127.146667"></polygon>
		</g>
    </svg>
  )
);

BuildkiteIcon.displayName = "BuildkiteIcon";

export const BuildkiteIconMetadata = {
  id: "buildkite-icon",
  baseId: "buildkite-icon",
  variant: "default",
  name: "Buildkite Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 171",
} as const;

export default BuildkiteIcon;
