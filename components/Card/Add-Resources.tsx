import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  desc: string;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ title, desc }) => {
  return (
    <div className="h-[20vh] md:h-[50vh] rounded-lg w-full border-2 border-dashed hover:border-solid p-1 hover:bg-bodydark1 dark:hover:border-stroke dark:border-bodydark dark:hover:bg-graydark cursor-pointer bg-white py-6 px-7.5 shadow-default dark:bg-boxdark">
      <div className="h-full flex w-full items-center justify-center">
        <div className="text-3xl w-full h-full flex flex-col justify-center items-center gap-2">
          <svg
            // width={150}
            // height={150}
            viewBox="0 0 24 24"
            fill="none"
            className="w-12 h-12 md:w-24 md:h-24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M17.7501 3C19.4831 3 20.8993 4.35645 20.995 6.06558L21.0001 6.25V12.0219C20.5369 11.7253 20.0336 11.4859 19.5001 11.3135V6.25C19.5001 5.33183 18.793 4.57881 17.8936 4.5058L17.7501 4.5H6.2501C5.64992 4.5 5.12031 4.80213 4.80507 5.2626C4.49114 5.095 4.13172 5 3.7501 5C3.56887 5 3.39265 5.02142 3.22383 5.06188C3.67711 3.90899 4.77007 3.07762 6.06568 3.00514L6.2501 3H17.7501Z"
                fill="#c0bfbc"
              ></path>
              <path
                d="M11.3135 19.5C11.4858 20.0335 11.7253 20.5368 12.0218 21H6.2501C4.51707 21 3.10086 19.6435 3.00525 17.9344L3.0001 17.75L2.99981 9.37208C3.23448 9.45505 3.48702 9.5002 3.7501 9.5002C4.01315 9.5002 4.26566 9.45506 4.50031 9.37211L4.5001 17.75C4.5001 18.6682 5.20721 19.4212 6.10657 19.4942L6.2501 19.5H11.3135Z"
                fill="#c0bfbc"
              ></path>
              <path
                d="M11.7306 14.5031C12.0174 13.9521 12.3808 13.4474 12.8066 13.0031H8.74786L8.64609 13.0099C8.28002 13.0596 7.99786 13.3734 7.99786 13.7531C7.99786 14.1673 8.33365 14.5031 8.74786 14.5031H11.7306Z"
                fill="#c0bfbc"
              ></path>
              <path
                d="M15.2523 9.49623C15.6666 9.49623 16.0023 9.83201 16.0023 10.2462C16.0023 10.6259 15.7202 10.9397 15.3541 10.9894L15.2523 10.9962H8.74786C8.33365 10.9962 7.99786 10.6604 7.99786 10.2462C7.99786 9.86653 8.28002 9.55274 8.64609 9.50307L8.74786 9.49623H15.2523Z"
                fill="#c0bfbc"
              ></path>
              <path
                d="M3.7501 6C4.44051 6 5.0002 6.55969 5.0002 7.2501C5.0002 7.94051 4.44051 8.5002 3.7501 8.5002C3.05969 8.5002 2.5 7.94051 2.5 7.2501C2.5 6.55969 3.05969 6 3.7501 6Z"
                fill="#c0bfbc"
              ></path>
              <path
                d="M23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23C20.5376 23 23 20.5376 23 17.5ZM18.0006 18L18.0011 20.5035C18.0011 20.7797 17.7773 21.0035 17.5011 21.0035C17.225 21.0035 17.0011 20.7797 17.0011 20.5035L17.0006 18H14.4956C14.2197 18 13.9961 17.7762 13.9961 17.5C13.9961 17.2239 14.2197 17 14.4956 17H17.0005L17 14.4993C17 14.2231 17.2239 13.9993 17.5 13.9993C17.7761 13.9993 18 14.2231 18 14.4993L18.0005 17H20.4966C20.7725 17 20.9961 17.2239 20.9961 17.5C20.9961 17.7762 20.7725 18 20.4966 18H18.0006Z"
                fill="#c0bfbc"
              ></path>
            </g>
          </svg>
          <div className="text-sm md:text-3xl">
            Click to Upload Image of your Electronic Item
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
