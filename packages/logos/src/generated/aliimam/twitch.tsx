/**
 * Auto-generated logo component: Twitch (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TwitchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Twitch = React.forwardRef<SVGSVGElement, TwitchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 268"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z" fill="#5A3E85"></path>
    </g>
    </svg>
  )
);

Twitch.displayName = "Twitch";

export const TwitchMetadata = {
  id: "twitch",
  baseId: "twitch",
  variant: "default",
  name: "Twitch",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 268",
} as const;

export default Twitch;
