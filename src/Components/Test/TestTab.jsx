import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import axios from "axios";
import ContestCard from "../Shared/ContestCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ contests }) {
  console.log(contests);
  const article = contests?.filter((item) => item.type === "Article");
  const business = contests?.filter((item) => item.type === "business");
  const gaming = contests?.filter((item) => item.type === "gaming");
  const medical = contests?.filter((item) => item.type === "medical");
  console.log(article);

  return (
    <div className="w-full  px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 w-full text-center justify-center items-center rounded-xl bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium  ",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-blue-500 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Article Writing Contest
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-blue-500 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Business Contest
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-blue-500 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Gaming Contest
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-blue-700 shadow"
                  : "text-blue-500 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Medical Contest
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {article?.map((contest) => (
                <ContestCard contest={contest} key={contest._id}></ContestCard>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {business?.map((contest) => (
                <ContestCard key={contest._id} contest={contest}></ContestCard>
              ))}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {gaming?.map((contest) => (
                <ContestCard key={contest._id} contest={contest}></ContestCard>
              ))}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {medical?.map((contest) => (
                <ContestCard key={contest._id} contest={contest}></ContestCard>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
