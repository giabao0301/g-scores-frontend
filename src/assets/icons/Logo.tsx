import React from "react";

type LogoProps = {
  className?: string;
};

export const Logo = (props: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="68"
    height="50"
    viewBox="0 0 68 50"
    fill="none"
    className={props.className}
  >
    <path
      d="M18.7868 18.7425L26.7402 26.696C24.7051 28.7311 21.8918 29.9881 18.7868 29.9881C12.5767 29.9881 7.54127 24.9527 7.54127 18.7425C7.54127 12.5324 12.5767 7.49702 18.7868 7.49702C23.2536 7.49702 27.1068 10.1008 28.925 13.8642C29.6208 11.0136 30.9152 8.40235 32.6735 6.15773C29.2467 2.37929 24.2936 0 18.7868 0H0.0442505L5.5286 5.48435C2.13923 8.8812 0.0442505 13.565 0.0442505 18.7425C0.0442505 29.0902 8.43163 37.4851 18.7868 37.4851C24.2936 37.4851 29.2467 35.1058 32.6735 31.3199C33.0625 30.8934 33.4292 30.4445 33.7808 29.9881C36.1302 26.8531 37.5293 22.9624 37.5293 18.7425H18.7868Z"
      fill="#FED800"
    />
    <path
      d="M48.7744 22.4833C50.8394 22.4833 52.5229 20.7999 52.5229 18.7348C52.5229 16.6698 50.8394 14.9863 48.7744 14.9863C46.9338 14.9863 45.4 16.3181 45.0857 18.0689C45.0408 18.2859 45.0258 18.5029 45.0258 18.7348C45.0258 20.7999 46.7093 22.4833 48.7744 22.4833Z"
      fill="#FED800"
    />
    <path
      d="M67.5179 0H49.0971C48.9924 0 48.8801 0 48.7754 0C43.2686 0 38.3155 2.37929 34.8812 6.16521C34.4996 6.59169 34.1255 7.04061 33.7813 7.5045C31.7462 10.213 30.4294 13.4827 30.1151 17.0516H37.6571C37.7019 16.7374 37.7618 16.4306 37.8366 16.1313C37.889 15.8919 37.9563 15.6525 38.0312 15.413C38.1135 15.1512 38.2032 14.8968 38.3005 14.6424C38.308 14.6274 38.308 14.6199 38.3155 14.605C38.4127 14.3581 38.5175 14.1112 38.6372 13.8717C38.7494 13.6323 38.8691 13.4004 39.0038 13.1759C39.1011 13.0038 39.1984 12.8392 39.3106 12.6746C39.3555 12.5998 39.4004 12.525 39.4527 12.4501C39.4677 12.4277 39.4827 12.3978 39.5051 12.3753C39.6099 12.2182 39.7296 12.0611 39.8493 11.904C39.8643 11.8815 39.8867 11.8591 39.9017 11.8366C40.0438 11.6496 40.1935 11.47 40.3506 11.2904V11.2829C40.5227 11.0884 40.7022 10.9014 40.8893 10.7218C41.0689 10.5347 41.2634 10.3626 41.4579 10.198C41.645 10.0334 41.8395 9.87631 42.0415 9.72667C42.0415 9.72667 42.0565 9.71919 42.064 9.71171C42.2735 9.55458 42.4905 9.40494 42.7074 9.27027C43.0217 9.06077 43.3509 8.87372 43.6876 8.70911C43.8148 8.64177 43.942 8.58192 44.0767 8.52206C44.3161 8.40983 44.563 8.30508 44.8099 8.2153C44.8698 8.19285 44.9371 8.16292 45.0119 8.14048C45.1466 8.09558 45.2887 8.04321 45.4234 8.0058C45.5506 7.96839 45.6703 7.93098 45.7975 7.89357C45.9921 7.84119 46.1866 7.78882 46.3886 7.74393C46.5008 7.72148 46.6131 7.69904 46.7253 7.68407C46.86 7.65414 46.9947 7.6317 47.1293 7.61673C47.2865 7.59429 47.4511 7.57184 47.6157 7.55688C47.7878 7.53443 47.9673 7.52695 48.1469 7.51198C48.3564 7.5045 48.5584 7.49702 48.7679 7.49702C54.978 7.49702 60.0134 12.5324 60.0134 18.75C60.0134 24.9676 54.978 29.9956 48.7679 29.9956C48.5584 29.9956 48.3564 29.9881 48.1469 29.9806C47.9673 29.9656 47.7878 29.9582 47.6157 29.9357C47.4511 29.9207 47.2865 29.8983 47.1293 29.8758C47.0321 29.8609 46.9273 29.8459 46.8301 29.8235C46.7178 29.8085 46.6056 29.7861 46.5008 29.7636C46.3587 29.7412 46.2165 29.7038 46.0744 29.6738C45.6404 29.5616 45.2139 29.4344 44.8099 29.2773C44.563 29.1875 44.3161 29.0828 44.0767 28.9705C43.942 28.9107 43.8148 28.8508 43.6876 28.7835C43.3509 28.6189 43.0217 28.4318 42.7074 28.2223C42.4905 28.0876 42.2735 27.938 42.064 27.7809C42.064 27.7734 42.049 27.7659 42.0415 27.7659C41.8395 27.6163 41.645 27.4591 41.4579 27.2945C41.2634 27.1299 41.0689 26.9578 40.8893 26.7708C40.7022 26.5912 40.5227 26.4042 40.3506 26.2096C40.1935 26.0301 40.0438 25.843 39.9017 25.656C39.8792 25.6335 39.8643 25.6111 39.8493 25.5886C39.7296 25.4315 39.6099 25.2744 39.5051 25.1173L39.3256 24.8479C39.2133 24.6758 39.1086 24.5037 39.0038 24.3242C38.8691 24.0922 38.7494 23.8678 38.6372 23.6283C37.9414 26.4715 36.647 29.0902 34.8887 31.3274C38.3155 35.1133 43.2686 37.4926 48.7754 37.4926C59.1305 37.4926 67.5179 29.0977 67.5179 18.75C67.5179 13.5725 65.423 8.88868 62.0336 5.49183L67.5179 0Z"
      fill="#FED800"
    />
    <path
      d="M0 47.8799V47.0719C0 45.8224 1.0849 44.9619 2.43915 44.9619H5.64147V46.0094H2.59627C1.87051 46.0094 1.48145 46.4658 1.48145 47.0644V47.8799C1.48145 48.5159 1.87051 48.9349 2.59627 48.9349H4.1675V47.5582H5.64147V49.9824H2.43167C1.0849 49.9824 0 49.1668 0 47.8799Z"
      fill="#FED800"
    />
    <path
      d="M6.77866 47.1542C6.77866 45.8747 7.63161 44.9619 9.33752 44.9619H10.8339C12.5398 44.9619 13.3928 45.8822 13.3928 47.1542V47.7826C13.3928 49.0621 12.5398 49.9749 10.8339 49.9749H9.33752C7.63161 49.9749 6.77866 49.0546 6.77866 47.7826V47.1542ZM8.2601 47.1841V47.7602C8.2601 48.6281 8.64917 49.0172 9.65177 49.0172H10.5122C11.5223 49.0172 11.9113 48.6281 11.9113 47.7602V47.1841C11.9113 46.3087 11.5223 45.9271 10.5122 45.9271H9.65177C8.64917 45.9271 8.2601 46.3087 8.2601 47.1841Z"
      fill="#FED800"
    />
    <path
      d="M14.5827 44.9619H16.0642V47.8799C16.0642 48.5159 16.4532 48.9349 17.179 48.9349H20.2242V49.9824H17.0144C15.6676 49.9824 14.5827 49.1668 14.5827 47.8799V44.9619Z"
      fill="#FED800"
    />
    <path
      d="M21.234 44.9616H25.005C26.7109 44.9616 27.5638 45.8819 27.5638 47.1538V47.7823C27.5638 49.0617 26.7109 49.9746 25.005 49.9746H21.234V44.9541V44.9616ZM22.6706 48.9346H24.6608C25.596 48.9346 26.0899 48.5829 26.0899 47.7075V47.2286C26.0899 46.3607 25.596 46.0091 24.6608 46.0091H22.6706V48.9346Z"
      fill="#FED800"
    />
    <path
      d="M28.5147 47.0644C28.5147 45.8224 29.3078 44.9619 30.5648 44.9619H34.3208V46.0094H30.7594C30.2431 46.0094 29.9887 46.2788 29.9887 46.6603V46.9073H34.1487V47.9248H29.9887V48.1493C29.9887 48.6506 30.3179 48.9349 30.7594 48.9349H34.3208V49.9824H30.5723C29.3078 49.9824 28.5147 49.1294 28.5147 47.8799V47.0644Z"
      fill="#FED800"
    />
    <path
      d="M37.5383 44.9619L40.7107 48.673V44.9844L42.1921 44.9619V49.9824H40.0149L36.8874 46.3311V49.9824H35.4059V44.9619H37.5458H37.5383Z"
      fill="#FED800"
    />
    <path
      d="M43.5231 47.1542C43.5231 45.8747 44.3761 44.9619 46.082 44.9619H47.5784C49.2843 44.9619 50.1373 45.8822 50.1373 47.1542V47.7826C50.1373 49.0621 49.2843 49.9749 47.5784 49.9749H46.082C44.3761 49.9749 43.5231 49.0546 43.5231 47.7826V47.1542ZM45.0046 47.1841V47.7602C45.0046 48.6281 45.3936 49.0172 46.3962 49.0172H47.2567C48.2668 49.0172 48.6558 48.6281 48.6558 47.7602V47.1841C48.6558 46.3087 48.2668 45.9271 47.2567 45.9271H46.3962C45.3936 45.9271 45.0046 46.3087 45.0046 47.1841Z"
      fill="white"
    />
    <path
      d="M52.2691 44.9619L53.5635 48.673L54.8653 44.9619H56.5563L57.8507 48.673L59.1526 44.9619H60.6116L58.8608 49.9824H56.8631L55.7258 46.7202L54.5885 49.9824H52.5908L50.8325 44.9619H52.299H52.2691Z"
      fill="white"
    />
    <path
      d="M61.9219 44.9785H63.4033V47.8965C63.4033 48.5325 63.7924 48.9515 64.5181 48.9515H67.5633V49.999H64.3535C63.0068 49.999 61.9219 49.1834 61.9219 47.8965V44.9785Z"
      fill="white"
    />
  </svg>
);
