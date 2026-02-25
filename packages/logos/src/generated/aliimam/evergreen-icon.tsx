/**
 * Auto-generated logo component: Evergreen Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EvergreenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const EvergreenIcon = React.forwardRef<SVGSVGElement, EvergreenIconProps>(
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
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fillRule="nonzero">
            <circle fill="#38A065" cx="128" cy="128" r="128"></circle>
            <path d="M135.96993,176.048945 L135.96993,207.928664 L120.03007,207.928664 L120.03007,176.048945 L135.96993,176.048945 Z M128,56.5 L183.789508,168.079015 L72.2104924,168.079015 L128,56.5 Z" fill="#FFFFFF"></path>
        </g>
    </g>
    </svg>
  )
);

EvergreenIcon.displayName = "EvergreenIcon";

export const EvergreenIconMetadata = {
  id: "evergreen-icon",
  baseId: "evergreen-icon",
  variant: "default",
  name: "Evergreen Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default EvergreenIcon;
