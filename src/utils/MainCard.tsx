import { Show } from "easy-beauty-components---react";
import React from "react";

const MainCard = ({
  children,
  title,
  secondary,
}: React.PropsWithChildren<{
  title?: React.ReactNode;
  secondary?: React.ReactNode;
}>) => {
  return (
    <main className="border border-gray-200 rounded bg-base-200 md:p-4 p-2 mb-4">
      <Show when={title || secondary ? true : false}>
        <section className="flex justify-between items-center">
          <aside>
            {title && (
              <h2 className="text-left md:text-base text-xs md:mb-4 mb-2">
                {title}
              </h2>
            )}
          </aside>
          <div>{secondary && secondary}</div>
        </section>
        <hr className="mb-3 mt-1" />
      </Show>
      {children && children}
    </main>
  );
};

export default MainCard;
