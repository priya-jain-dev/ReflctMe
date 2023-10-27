import React from "react";

export const p2: React.FC<{}> = () => {
  return (
    <div className="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto">
      <div className="flex flex-col gap-2 pb-2 dark:text-foreground text-foreground/80 text-sm">
        <div>
          <span>
            <div className="relative gizmo:mt-5" data-projection-id="5">
              <div className="sticky top-0 z-[16]" data-projection-id="43">
                <h3 className="h-9 pb-2 pt-3 px-3 gizmo:px-2 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-50 gizmo:bg-white dark:bg-gray-900 gizmo:dark:bg-black gizmo:text-gizmo-gray-600">
                  Today
                </h3>
              </div>
              <ol>
                <li className="relative z-[15]" data-projection-id="44">
                  <a className="flex p-3 items-center gap-3 relative rounded-md hover:bg-gray-100 cursor-pointer break-all bg-gray-100 dark:bg-gray-800 pr-14 dark:hover:bg-gray-800 group animate-flash">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon-sm"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                      Encontrar números desaparecidos
                    </div>
                    <div className="absolute flex right-1 z-10 dark:text-gray-300 text-gray-800 visible">
                      <button className="p-1 hover:text-token-text-primary">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="icon-sm"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </button>
                      <button className="p-1 hover:text-token-text-primary">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="icon-sm"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </div>
                  </a>
                </li>
              </ol>
            </div>
            <div className="relative gizmo:mt-5" data-projection-id="6">
              <div className="sticky top-0 z-[14]" data-projection-id="7">
                <h3 className="h-9 pb-2 pt-3 px-3 gizmo:px-2 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-50 gizmo:bg-white dark:bg-gray-900 gizmo:dark:bg-black gizmo:text-gizmo-gray-600">
                  Yesterday
                </h3>
              </div>
              <ol>
                <li className="relative" data-projection-id="11">
                  <a className="flex p-3 items-center gap-3 relative rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2B32] cursor-pointer break-all bg-gray-50 gizmo:bg-white gizmo:hover:bg-gray-100 hover:pr-4 dark:bg-gray-900 group">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon-sm"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                      SQL Query TO_DATE Error
                      <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l dark:from-gray-900 from-gray-50 gizmo:from-white group-hover:from-gray-100 dark:group-hover:from-[#2A2B32]"></div>
                    </div>
                  </a>
                </li>
              </ol>
            </div>
            <div className="relative gizmo:mt-5" data-projection-id="12">
              <div className="sticky top-0 z-[14]" data-projection-id="13">
                <h3 className="h-9 pb-2 pt-3 px-3 gizmo:px-2 text-xs text-foreground/50 font-medium text-ellipsis overflow-hidden break-all bg-gray-50 gizmo:bg-white dark:bg-gray-900 gizmo:dark:bg-black gizmo:text-gizmo-gray-600">
                  Previous 7 Days
                </h3>
              </div>
              <ol>
                <li className="relative" data-projection-id="14"></li>
                <li className="relative" data-projection-id="38">
                  <a className="flex p-3 items-center gap-3 relative rounded-md hover:bg-gray-100 dark:hover:bg-[#2A2B32] cursor-pointer break-all bg-gray-50 gizmo:bg-white gizmo:hover:bg-gray-100 hover:pr-4 dark:bg-gray-900 group">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon-sm"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                      Insertar datos de fecha
                      <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l dark:from-gray-900 from-gray-50 gizmo:from-white group-hover:from-gray-100 dark:group-hover:from-[#2A2B32]"></div>
                    </div>
                  </a>
                </li>
              </ol>
            </div>
          </span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
