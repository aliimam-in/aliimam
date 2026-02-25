/**
 * Auto-generated logo component: New Relic Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface NewRelicIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NewRelicIcon = React.forwardRef<SVGSVGElement, NewRelicIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 296"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#00AC69" points="206.744916 102.321906 206.744916 193.264381 128 238.744916 128 295.586287 256 221.694364 256 73.8919233"></polygon>
        <polygon fill="#1CE783" points="128 56.8599651 206.744916 102.321906 256 73.8919233 256 73.8919233 128 0 0 73.8919233 0 73.8919233 49.2364904 102.321906"></polygon>
        <polygon fill="#1D252C" points="78.7635096 176.232423 78.7635096 267.174898 128 295.586287 128 147.80244 -5.2846874e-14 73.8919233 -5.2846874e-14 130.751888"></polygon>
    </g>
    </svg>
  )
);

NewRelicIcon.displayName = "NewRelicIcon";

export const NewRelicIconMetadata = {
  id: "new-relic-icon",
  baseId: "new-relic-icon",
  variant: "default",
  name: "New Relic Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 296",
} as const;

export default NewRelicIcon;
