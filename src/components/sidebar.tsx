import { Icons } from "@/components/ui/icons";
import { ReactNode } from "react";
// import { useTranslation } from "react-i18next";

// import {
//   CloseSidebarButton,
//   OpenSidebarButton,
// } from "./components/OpenCloseButton";

// import Search from "../Search";

export interface MoodItem {
  id: string;
  name: string;
  description: string;
  content: string;
  // model: OpenAIModel;
  // folderId: string | null;
}

interface Props {
  isOpen: boolean;
  addItemButtonTitle: string;
  side: "left" | "right";
  items: MoodItem[];
  itemComponent: ReactNode;
  // folderComponent: ReactNode;
  footerComponent?: ReactNode;
  // searchTerm: string;
  // handleSearchTerm: (searchTerm: string) => void;
  toggleOpen: () => void;
  handleCreateItem: () => void;
  // handleCreateFolder: () => void;
  handleDrop: (e: any) => void;
}

const Sidebar = ({
  isOpen,
  addItemButtonTitle,
  side,
  items,
  itemComponent,
  // folderComponent,
  footerComponent,
  // searchTerm,
  // handleSearchTerm,
  toggleOpen,
  handleCreateItem,
  // handleCreateFolder,
  handleDrop,
}: Props) => {
  // const { t } = useTranslation("promptbar");

  const allowDrop = (e: any) => {
    e.preventDefault();
  };

  const highlightDrop = (e: any) => {
    e.target.style.background = "#343541";
  };

  const removeHighlight = (e: any) => {
    e.target.style.background = "none";
  };

  // return isOpen ? (
  //   <div>
  //     <div
  //       className={`fixed top-0 ${side}-0 z-40 flex h-full w-[260px] flex-none flex-col space-y-2 bg-background p-2  transition-all sm:relative sm:top-0`}
  //     >
  //       <div className="flex items-center">
  //         <button
  //           className="text-sidebar flex w-[190px] flex-shrink-0 cursor-pointer select-none items-center gap-3 rounded-md border border-white/20 p-3 text-white transition-colors duration-200 hover:bg-gray-500/10"
  //           // onClick={() => {
  //           //   handleCreateItem();
  //           //   // handleSearchTerm("");
  //           // }}
  //         >
  //           {/* <IconPlus size={16} /> */}
  //           {addItemButtonTitle}
  //         </button>

  //         {/* <button
  //           className="ml-2 flex flex-shrink-0 cursor-pointer items-center gap-3 rounded-md border border-white/20 p-3 text-sm text-white transition-colors duration-200 hover:bg-gray-500/10"
  //           onClick={handleCreateFolder}
  //         >
  //           <IconFolderPlus size={16} />
  //         </button> */}
  //       </div>
  //       {/* <Search
  //         placeholder={t("Search...") || ""}
  //         searchTerm={searchTerm}
  //         onSearch={handleSearchTerm}
  //       /> */}

  //       <div className="flex-grow overflow-auto">
  //         {/* {items?.length > 0 && (
  //           <div className="flex border-b border-white/20 pb-2">
  //             {folderComponent}
  //           </div>
  //         )} */}

  //         {items?.length > 0 ? (
  //           <div
  //             className="pt-2"
  //             onDrop={handleDrop}
  //             onDragOver={allowDrop}
  //             onDragEnter={highlightDrop}
  //             onDragLeave={removeHighlight}
  //           >
  //             {itemComponent}
  //           </div>
  //         ) : (
  //           <div className="mt-8 select-none text-center text-white opacity-50">
  //             <Icons.openSide className="mx-auto mb-3" />
  //             <span className="text-[14px] leading-normal">No data</span>
  //           </div>
  //         )}
  //       </div>
  //       {footerComponent}
  //     </div>

  //     {/* <CloseSidebarButton onClick={toggleOpen} side={side} /> */}
  //   </div>
  // ) : (
  //   <></>
  //   // <OpenSidebarButton onClick={toggleOpen} side={side} />
  // );
  return (
    <div className="h-full w-[240px] border-foreground/20 border-r-2">
      <div className="flex h-full min-h-0 flex-col ">
        <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
          {/* <h2></h2> */}
          <nav
            className="flex h-full w-full flex-col p-2 gizmo:px-3 gizmo:py-3.5"
            aria-label="Actions"
          >
            <div className="mb-4 flex flex-row gap-2">
              <button className="flex px-3 bg-primary py-1 items-center gap-3 transition-colors duration-200 cursor-pointer text-sm rounded-md border border-foreground/20  hover:bg-primary/80 h-11   flex-grow overflow-hidden">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-sm"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                <span className="truncate">Today</span>
              </button>
              <span className="" data-state="closed">
                <a className="flex px-3 min-h-[44px] py-1 gap-3 transition-colors duration-200 dark:text-foreground/70 cursor-pointer text-sm rounded-md border dark:border-white/20 gizmo:min-h-0 hover:bg-gray-500/10 h-11 gizmo:h-10 gizmo:rounded-lg gizmo:border-[rgba(0,0,0,0.1)] w-11 flex-shrink-0 items-center justify-center bg-white dark:bg-transparent">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon-sm"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                  </svg>
                  {/* <span>Close sidebar</span> */}
                </a>
              </span>
            </div>

            <div className="border-t border-foreground/20 pt-2 empty:hidden gizmo:border-token-border-light">
              <a className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200  cursor-pointer text-sm hover:bg-foreground/10  rounded-md text-foreground">
                <span className="flex w-full flex-row flex-wrap-reverse justify-between">
                  <span className="gold-new-button flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      className="h-4 w-4 shrink-0"
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M21.44 15.707a2 2 0 0 1-2 2h-12l-4 4v-16a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"
                      ></path>
                      <path
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="1.7"
                        d="M7.825 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375ZM12.5 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375ZM17.175 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375Z"
                      ></path>
                    </svg>
                    Mood Diary
                  </span>
                </span>
              </a>
              {/* <div className="flex w-full items-center"> */}
              <div className="grow ">
                <div
                  className="group relative self-end"
                  data-headlessui-state=""
                >
                  <button
                    className="flex w-full items-center gap-3 rounded-md p-3 text-sm transition-colors duration-200 hover:bg-gray-100 group-ui-open:bg-gray-100 gizmo:gap-2 gizmo:rounded-lg gizmo:p-1 gizmo:hover:bg-gray-50 dark:hover:bg-gray-800 dark:group-ui-open:bg-gray-800"
                    id="headlessui-menu-button-:rb:"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div className="relative grow -space-y-px overflow-hidden text-ellipsis whitespace-nowrap text-left text-foreground/70  dark:text-foreground">
                      <div className="font-semibold">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon-sm"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
