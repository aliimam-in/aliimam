/**
 * Auto-generated logo component: Mailjet Icon (default)
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MailjetIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MailjetIcon = React.forwardRef<SVGSVGElement, MailjetIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 256 255"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon fill="#9585F4" points="1.42108547e-14 97.9914749 93.4083546 140.330776 112.177323 121.670929 64.3819267 99.9556692 212.56948 43.2122762 155.607843 190.745098 134.001705 143.386189 115.123615 162.155158 116.105712 164.337596 157.462916 255.017903 256 -7.10542736e-15"></polygon>
    </g>
    </svg>
  )
);

MailjetIcon.displayName = "MailjetIcon";

export const MailjetIconMetadata = {
  id: "mailjet-icon",
  baseId: "mailjet-icon",
  variant: "default",
  name: "Mailjet Icon",
  category: "aliimam",
  tags: [],
  viewBox: "0 0 256 255",
} as const;

export default MailjetIcon;
