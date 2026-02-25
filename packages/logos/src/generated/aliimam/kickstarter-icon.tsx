/**
 * Auto-generated logo component: Kickstarter Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface KickstarterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const KickstarterIcon = React.forwardRef<SVGSVGElement, KickstarterIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 290"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#05CE78">
        <path d="M209.302,144.583 L235.582,118.478 C262.806,91.436 262.806,47.391 235.582,20.349 C208.358,-6.694 164.018,-6.694 136.794,20.349 L127.225,29.853 C114.557,11.781 93.667,0 69.812,0 C31.267,0 0,31.059 0,69.346 L0,219.686 C0,257.973 31.267,289.032 69.812,289.032 C93.667,289.032 114.557,277.251 127.225,259.178 L136.794,268.683 C164.018,295.726 208.358,295.726 235.582,268.683 C262.806,241.641 262.806,197.597 235.582,170.554 L209.302,144.583"></path>
    </g>
    </svg>
  )
);

KickstarterIcon.displayName = "KickstarterIcon";

export const KickstarterIconMetadata = {
  id: "kickstarter-icon",
  baseId: "kickstarter-icon",
  variant: "default",
  name: "Kickstarter Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 290",
} as const;

export default KickstarterIcon;
