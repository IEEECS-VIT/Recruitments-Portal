"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./button";
import Header from "./header";
import SubHeader from "./subdomain-header";
import { GetDomains, PutDomains } from "@/api";

const dropdownVariants = {
  key: "div",
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { type: "spring", bounce: 0.35 },
  },
  exit: {
    scaleY: 0,
    transition: { when: "afterChildren" },
  },
  transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
};
interface Subdomain {
  subdomain: string;
  completed: boolean;
}

interface Data {
  [key: string]: Subdomain[];
}

function getSubdomainsByKey(data: Data, key: string): string[] {
  if (data.hasOwnProperty(key)) {
    const subdomains: Subdomain[] = data[key];
    return subdomains.map((subdomainObj) => subdomainObj.subdomain);
  } else {
    return [];
  }
}

export default function JoinTeam(props: {
  teamName: string;
  order: string;
  titles: string[];
}) {
  interface Subdomain {
    subdomain: string;
    completed: boolean;
  }

  interface ResponseData {
    [key: string]: Subdomain[];
  }

  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [isShown, setIsShown] = useState(false);

  const onClick = (teamName: string) => {
    setIsShown(!isShown);
    if (typeof window !== "undefined") {
      if (!isShown) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    }
  };
  const handleClick = (props: { title: string }) => {
    setSelectedDomains((prevSelected: string[]) => {
      if (prevSelected.includes(props.title)) {
        if (typeof window !== "undefined") {
          const element = document.getElementById(props.title);
          if (element) {
            element.classList.remove("text-main-pink");
            element.classList.add("text-white");
          }
          return prevSelected.filter((item) => item !== props.title);
        }
      }
      if (prevSelected.length === 2) {
        return prevSelected;
      } else {
        if (typeof window !== "undefined") {
          const element = document.getElementById(props.title);
          if (element) {
            element.classList.remove("text-white");
            element.classList.add("text-main-pink");
          }
        }
        return [...prevSelected, props.title];
      }
    });
  };
  useEffect(() => {
    setIsShown(false);
    document.body.style.overflow = "auto";
    // const fetchData = async () => {
    //   try {
    //     const responseData: ResponseData = await getDomains();
    //     setSelectedDomains(getSubdomainsByKey(responseData, props.teamName));
    //     console.log(selectedDomains);
    //   } catch (error) {
    //     console.error("Error fetching domains:", error);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <>
      <div
        className={`flex ${
          props.order === "1"
            ? "flex-col md:flex-row"
            : "flex-col md:flex-row-reverse"
        }  justify-evenly items-center h-screen w-full`}
      >
        <Header title={props.teamName} />
        <Button
          text="JOIN THE TEAM"
          onClick={() => {
            onClick(props.teamName);
          }}
        />
      </div>
      <AnimatePresence>
        {isShown && (
          <motion.div
            {...dropdownVariants}
            className="w-full h-screen bg-main-bg inset-0 flex  flex-col justify-around items-center fixed z-20 origin-top"
          >
            <div className="w-[95%] h-[70%] flex flex-row  justify-evenly items-center flex-wrap gap-x-[14%]">
              {props.titles.map((title) => (
                <motion.div
                  className="hover:cursor-pointer z-0"
                  key={title}
                  onClick={() => {
                    handleClick({ title });
                  }}
                >
                  <SubHeader title={title} id={title} />
                </motion.div>
              ))}
            </div>
            <Button
              text="CONFIRM"
              onClick={() => {
                onClick(props.teamName);
                PutDomains(selectedDomains, props.teamName);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
