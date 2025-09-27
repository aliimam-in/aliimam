import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GrokProps extends IconProps {
  type?: "wordmark" | "icon";
}

export const Grok: IconComponent<GrokProps> = React.forwardRef<
  SVGSVGElement,
  GrokProps
>(function Grok(
  {
    color = "currentColor",
    fill,
    size = 20,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    type = "icon",
    ...props
  },
  forwardedRef,
) {
  if (type === "wordmark") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 62 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M52.707 17.571V6.513H54.454V13.811L58.15 9.564H60.269L56.944 13.204 60.3 17.571H58.212L55.494 13.818 54.454 13.811V17.571H52.707ZM47.407 17.757C44.809 17.757 43.402 15.914 43.402 13.56 43.402 11.19 44.809 9.363 47.407 9.363 50.021 9.363 51.413 11.19 51.413 13.56 51.413 15.914 50.021 17.757 47.407 17.757ZM45.227 13.56C45.227 15.387 46.216 16.301 47.407 16.301 48.613 16.301 49.588 15.387 49.588 13.56 49.588 11.732 48.613 10.803 47.407 10.803 46.216 10.803 45.227 11.732 45.227 13.56ZM38.538 17.571V10.834L40.007 9.564H43.131V11.051H40.286V17.571H38.538ZM31.856 17.775C28.525 17.775 26.54 15.356 26.54 12.057 26.54 8.728 28.596 6.25 31.921 6.25 34.519 6.25 36.422 7.581 36.87 10.06H34.875C34.581 8.65 33.406 7.86 31.921 7.86 29.524 7.86 28.473 9.936 28.473 12.057 28.473 14.179 29.524 16.239 31.921 16.239 34.21 16.239 35.215 14.582 35.293 13.203H31.844V11.6H37.056L37.047 12.438C37.047 15.554 35.778 17.775 31.856 17.775ZM9.815 15.082 17.335 9.523C17.704 9.25 18.231 9.357 18.406 9.78 19.331 12.012 18.918 14.695 17.078 16.537 15.239 18.38 12.68 18.783 10.34 17.863L7.785 19.048C11.45 21.557 15.901 20.937 18.682 18.149 20.888 15.94 21.571 12.929 20.933 10.213L20.938 10.219C20.012 6.229 21.166 4.635 23.53 1.374 23.586 1.296 23.642 1.219 23.698 1.14L20.587 4.256V4.246L9.814 15.084M8.264 16.433C5.633 13.916 6.087 10.022 8.331 7.776 9.991 6.113 12.711 5.435 15.085 6.432L17.634 5.253C17.175 4.921 16.586 4.563 15.911 4.312 12.857 3.053 9.202 3.68 6.72 6.164 4.332 8.555 3.581 12.231 4.871 15.368 5.834 17.713 4.255 19.371 2.665 21.045 2.101 21.638 1.536 22.232 1.08 22.86L8.262 16.435"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "icon") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M10.042 15.026 17.602 9.035C17.973 8.741 18.502 8.855 18.679 9.312 19.609 11.718 19.193 14.609 17.344 16.594 15.495 18.58 12.921 19.015 10.569 18.023L8 19.3C11.685 22.004 16.16 21.336 18.957 18.332 21.175 15.951 21.862 12.705 21.219 9.778L21.225 9.784C20.294 5.485 21.454 3.766 23.831.252 23.887.169 23.944.085 24 0L20.872 3.358V3.348L10.04 15.028M8.245 16.963C5.226 14.207 5.746 9.943 8.323 7.484 10.228 5.664 13.349 4.921 16.074 6.013L19 4.722C18.473 4.358 17.797 3.966 17.022 3.691 13.517 2.313 9.322 2.999 6.473 5.719 3.733 8.337 2.871 12.362 4.351 15.797 5.456 18.364 3.644 20.18 1.819 22.013 1.172 22.662.523 23.312 0 24L8.243 16.965"
          fill="currentColor"
        />
      </svg>
    );
  }

  console.error(`Grok doesn't support ${type}`);
  return null;
});

Grok.displayName = "Grok";

Grok.metadata = {
  name: "Grok",
  category: "wordmark/ai",
  tags: ["grok", "icon"],
  description: "Grok icon from wordmark/ai category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Grok;
