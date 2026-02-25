/**
 * Auto-generated logo component: Puppet Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PuppetIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const PuppetIcon = React.forwardRef<SVGSVGElement, PuppetIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 395"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M256,256 L256,138.203835 L165.844601,138.203835 L117.796165,89.8970737 L117.796165,0 L0,0 L0,117.796165 L90.1553986,117.796165 L138.462159,166.102926 L138.462159,228.359233 L90.1553986,276.665994 L0,276.665994 L0,394.462159 L117.796165,394.462159 L117.796165,304.565086 L166.102926,256.258325 L256,256.258325 L256,256 L256,256 Z M39.2653885,39.2653885 L78.530777,39.2653885 L78.530777,78.530777 L39.2653885,78.530777 L39.2653885,39.2653885 Z M78.530777,354.938446 L39.2653885,354.938446 L39.2653885,315.673058 L78.530777,315.673058 L78.530777,354.938446 Z" fill="#FFAE1A"></path>
    </g>
    </svg>
  )
);

PuppetIcon.displayName = "PuppetIcon";

export const PuppetIconMetadata = {
  id: "puppet-icon",
  baseId: "puppet-icon",
  variant: "default",
  name: "Puppet Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 395",
} as const;

export default PuppetIcon;
