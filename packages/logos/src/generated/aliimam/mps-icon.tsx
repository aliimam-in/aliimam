/**
 * Auto-generated logo component: Mps Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MpsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MpsIcon = React.forwardRef<SVGSVGElement, MpsIconProps>(
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
      <defs>
        <linearGradient x1="75.7%" y1="132.916667%" x2="-19.4666667%" y2="11.0333333%" id="mpsLinearGradient-1">
            <stop stopColor="#087CFA" offset="6%"></stop>
            <stop stopColor="#21D789" offset="87%"></stop>
        </linearGradient>
        <linearGradient x1="76.4645944%" y1="92.4166667%" x2="28.6675778%" y2="-29.4666667%" id="mpsLinearGradient-2">
            <stop stopColor="#087CFA" offset="5%"></stop>
            <stop stopColor="#0A84F0" offset="18%"></stop>
            <stop stopColor="#1099D6" offset="39%"></stop>
            <stop stopColor="#19BAAD" offset="67%"></stop>
            <stop stopColor="#21D789" offset="87%"></stop>
        </linearGradient>
        <linearGradient x1="33.8010666%" y1="103.028279%" x2="64.8540035%" y2="-21.3983523%" id="mpsLinearGradient-3">
            <stop stopColor="#21D789" offset="12%"></stop>
            <stop stopColor="#6AE274" offset="36%"></stop>
            <stop stopColor="#A9EB62" offset="58%"></stop>
            <stop stopColor="#D6F255" offset="77%"></stop>
            <stop stopColor="#F2F64D" offset="92%"></stop>
            <stop stopColor="#FCF84A" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <polygon fill="url(#mpsLinearGradient-1)" points="0 256 256 256 127.402667 127.658667 1.5158245e-14 0"></polygon>
        <polygon fill="url(#mpsLinearGradient-2)" points="256 256 127.402667 127.658667 256 0"></polygon>
        <polygon fill="url(#mpsLinearGradient-3)" points="191.573333 191.616 127.402667 127.658667 256 0"></polygon>
    </g>
    </svg>
  )
);

MpsIcon.displayName = "MpsIcon";

export const MpsIconMetadata = {
  id: "mps-icon",
  baseId: "mps-icon",
  variant: "default",
  name: "Mps Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 256",
} as const;

export default MpsIcon;
