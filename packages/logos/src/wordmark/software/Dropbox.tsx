import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DropboxProps extends IconProps {
  type?: "wordmark" | "icon";
}

export const Dropbox: IconComponent<DropboxProps> = React.forwardRef<
  SVGSVGElement,
  DropboxProps
>(function Dropbox(
  {
    color = "currentColor",
    fill,
    size = 24,
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
        viewBox="0 0 88 24"
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
          d="M5.18659 3L0 6.375L5.1868 9.75L10.3744 6.375L15.5614 9.75L20.7484 6.375L15.5614 3L10.3744 6.375L5.18659 3ZM5.18659 16.5L0 13.125L5.1868 9.75L10.3744 13.125L5.18659 16.5ZM10.3744 13.125L15.5614 9.75L20.7484 13.125L15.5614 16.5L10.3744 13.125ZM10.3744 21L5.1868 17.625L10.3744 14.25L15.5614 17.625L10.3744 21ZM24.4307 6.32721H28.5585C31.1982 6.32721 33.354 7.914 33.354 11.5134V12.2826C33.354 15.8955 31.3198 17.5305 28.6206 17.5305H24.4307V6.32721ZM26.7367 8.35607V15.4746H28.5118C29.9973 15.4746 31.0145 14.4536 31.0145 12.2076V11.6261C31.0145 9.37993 29.969 8.35886 28.4342 8.35886H26.7367V8.35607ZM34.5805 8.466H36.4154L36.7025 10.5726C37.0519 9.12814 37.9475 8.38843 39.5699 8.38843H40.1316V10.7925H39.1922C37.3107 10.7925 36.8552 11.4679 36.8552 13.3841V17.5331H34.5805V8.466ZM40.6181 13.1938V12.942C40.6181 9.89464 42.4996 8.25986 45.0486 8.25986C47.6572 8.25986 49.4636 9.924 49.4636 12.942V13.1938C49.4636 16.1796 47.6883 17.7662 45.0486 17.7662C42.2278 17.7662 40.6181 16.1796 40.6181 13.1938ZM47.1576 13.1616V12.942C47.1576 11.2453 46.3374 10.2564 45.0486 10.2564C43.7753 10.2564 42.9239 11.1838 42.9239 12.942V13.1616C42.9239 14.7966 43.7288 15.7078 45.0331 15.7078C46.3399 15.7078 47.1576 14.8127 47.1576 13.1616ZM50.6618 8.466H52.5743L52.802 10.1949C53.2729 9.0315 54.2435 8.26243 55.6849 8.26243C57.9156 8.26243 59.3726 9.92679 59.3726 12.9767V13.2287C59.3726 16.2144 57.7501 17.769 55.6849 17.769C54.29 17.769 53.3635 17.1257 52.8924 16.0723V20.6447H50.6618V8.466ZM57.0641 13.1777V12.9741C57.0641 11.1677 56.1688 10.2724 54.9706 10.2724C53.6974 10.2724 52.8459 11.2774 52.8459 12.9581V13.1323C52.8459 14.7351 53.6663 15.7401 54.9241 15.7401C56.2309 15.7401 57.0641 14.8449 57.0641 13.1777ZM62.724 15.882L62.5428 17.5331H60.5707V5.43214H62.8016V10.0821C63.2882 8.90293 64.2586 8.25964 65.638 8.25964C67.716 8.27571 69.2635 9.76864 69.2635 12.7839V13.0517C69.2635 16.0697 67.8066 17.7662 65.5759 17.7662C64.1345 17.7662 63.1949 17.0451 62.724 15.882ZM66.9733 13.0519V12.8321C66.9733 11.1677 66.0935 10.2564 64.8796 10.2564C63.6194 10.2564 62.7551 11.3098 62.7551 12.8642V13.0519C62.7551 14.7484 63.5883 15.7241 64.8486 15.7241C66.1684 15.7241 66.9733 14.8449 66.9733 13.0519ZM70.2807 13.1938V12.942C70.2807 9.89464 72.1465 8.25986 74.6957 8.25986C77.3043 8.25986 79.1262 9.924 79.1262 12.942V13.1938C79.1262 16.1796 77.3353 17.7662 74.6957 17.7662C71.8722 17.7662 70.2807 16.1796 70.2807 13.1938ZM76.8177 13.1616V12.942C76.8177 11.2453 75.9973 10.2564 74.7085 10.2564C73.4352 10.2564 72.584 11.1838 72.584 12.942V13.1616C72.584 14.7966 73.3887 15.7078 74.693 15.7078C76.0155 15.7078 76.8177 14.8127 76.8177 13.1616ZM82.0997 12.8321L79.0356 8.46343H81.6597L83.435 11.181L85.2259 8.46343H87.8345L84.7238 12.816L88 17.5303H85.4199L83.4013 14.5286L81.445 17.5303H78.7741L82.0997 12.8321Z"
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
        <g clipPath="url(#undefined-clip0_2039_487)">
          <path d="M0 0H24V24H0V0Z" fill="#0061fe" />
          <path
            d="M8.19381 6L4.38831 8.39062L8.19399 10.7812L12.0001 8.39062L15.8063 10.7812L19.6122 8.39062L15.8061 6L12.0004 8.39062L8.19381 6ZM8.19381 15.5625L4.38831 13.1719L8.19399 10.7812L12.0001 13.1719L8.19418 15.5625H8.19381ZM12.0004 13.1719L15.8063 10.7812L19.612 13.1719L15.8061 15.5625L12.0004 13.1719ZM12.0004 18.75L8.19381 16.3594L12.0001 13.9688L15.8063 16.3594L12.0004 18.75Z"
            fill="#f7f5f2"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2039_487">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  console.error(`Dropbox doesn't support ${type}`);
  return null;
});

Dropbox.displayName = "Dropbox";

Dropbox.metadata = {
  name: "Dropbox",
  category: "wordmark/software",
  tags: ["dropbox", "icon"],
  description: "Dropbox icon from wordmark/software category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Dropbox;
