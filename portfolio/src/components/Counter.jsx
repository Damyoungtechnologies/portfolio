import CounterItem from "./CounterItem"
import React from "react";

const Counter = () => {
  return (
    <section className="counter-section">
      <div className="w-[90%] mx-auto">
        <div className="counter-container">
          <CounterItem
            count={3000}
            label="HAPPY CUSTOMERS"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M234.667 42.667c41.237 0 74.667 33.429 74.667 74.666c0 39.863-31.238 72.43-70.57 74.556l-4.097.111C193.43 192 160 158.571 160 117.333c0-39.862 31.238-72.43 70.57-74.556zm-149.334 384h187.791A127.2 127.2 0 0 1 257.77 384H128v-34.133l.111-4.142c2.057-38.365 32.515-68.392 69.222-68.392H272l3.908.114c3.809.223 7.54.769 11.168 1.612a128.5 128.5 0 0 1 38.566-30.345c-15.93-8.956-34.208-14.047-53.642-14.047h-74.667l-4.616.096c-59.715 2.49-107.384 53.071-107.384 115.104zm117.334-309.334c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32m118.636 331.629L384 410.667l62.697 38.295l-17.046-71.463l55.795-47.794l-73.232-5.871L384 256l-28.214 67.834l-73.232 5.871l55.795 47.794z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
          <CounterItem
            count={320}
            label="PROJECTS COMPLETED"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <path d="M20.52 20.414c.308-.375.48-.884.48-1.414V7c0-.53-.172-1.04-.48-1.414C20.215 5.21 19.799 5 19.365 5h-8.981C8.659 5 8.325 3.269 6.827 3.026C6.563 2.983 6.289 3 6.022 3c-.953 0-1.429 0-1.804.159a2 2 0 0 0-1.059 1.06C3 4.592 3 5.068 3 6.021V19c0 .53.172 1.04.48 1.414c.306.375.722.586 1.156.586h14.728c.434 0 .85-.21 1.157-.586M16 3h3" />
                  <path d="M13.5 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                </g>
              </svg>
            }
          />
          <CounterItem
            count={1000}
            label="CUPS OF COFFEE"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304zm-64.128 0l4.544-64H260.736l4.544 64zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64zm68.736 64l36.544 512H708.16l36.544-512z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  )
}

export default Counter
