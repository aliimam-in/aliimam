/**
 * Auto-generated logo component: Tag (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TagFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TagFilledLogo = React.forwardRef<SVGSVGElement, TagFilledLogoProps>(
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
      <path d="M11.172 2a3 3 0 0 1 2.121 .879l7.71 7.71a3.41 3.41 0 0 1 0 4.822l-5.592 5.592a3.41 3.41 0 0 1 -4.822 0l-7.71 -7.71a3 3 0 0 1 -.879 -2.121v-5.172a4 4 0 0 1 4 -4zm-3.672 3.5a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2" />
    </svg>
  )
);

TagFilledLogo.displayName = "TagFilledLogo";

export const TagFilledLogoMetadata = {
  id: "tag_filled",
  baseId: "tag",
  variant: "filled",
  name: "Tag",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TagFilledLogo;
