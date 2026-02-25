/**
 * Auto-generated logo component: Trash Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrashFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrashFilledLogo = React.forwardRef<SVGSVGElement, TrashFilledLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" />
  <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" />
    </svg>
  )
);

TrashFilledLogo.displayName = "TrashFilledLogo";

export const TrashFilledLogoMetadata = {
  id: "trash-filled",
  baseId: "trash-filled",
  variant: "default",
  name: "Trash Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrashFilledLogo;
