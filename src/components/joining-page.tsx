"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
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

export default function JoinTeam(props: {
  teamName: string;
  order: string;
  titles: string[];
  selectedDomains: string[];
}) {
  const { emailValue, accessToken, responseData } = useContext(AuthContext);
  const [selectedDomains, setSelectedDomains] = useState<string[]>(
    props.selectedDomains
  );
  const [isShown, setIsShown] = useState(false);

  const onClick = (teamName: string) => {
    setIsShown(!isShown);
    if (typeof window !== "undefined") {
      if (!isShown) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    }
  };
  const setTitle = (title: string) => {
    title = title.toLowerCase();
    if (title === "ai/ml") return "aiml";
    else if (title === "ui/ux") return "uiux";
    else if (title === "graphic design") return "graphic";
    else if (title === "p&m") return "pnm";
    else return title;
  };
  const handleClick = (props: { title: string }) => {
    props.title = setTitle(props.title);
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
            className="w-full h-screen bg-main-bg inset-0 flex  flex-col justify-around items-center fixed z-40 origin-top"
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
                  <SubHeader
                    title={title}
                    id={setTitle(title)}
                    selected={selectedDomains}
                  />
                </motion.div>
              ))}
            </div>
            <Button
              text="CONFIRM"
              onClick={() => {
                onClick(props.teamName);
                if (emailValue === undefined || accessToken === undefined) {
                  alert("Please Login Again and Try!!");
                } else {
                  PutDomains(
                    selectedDomains,
                    props.teamName,
                    emailValue,
                    accessToken
                  );
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
