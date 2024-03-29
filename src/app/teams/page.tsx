"use client";
import JoinTeam from "@/components/joining-page";
import ScrollIndicator from "@/components/scrollindicator";
import Button from "@/components/button";
import Link from "next/link";
import {useEffect, useState} from "react";
import {GetDomains} from "@/api";
import Loader from "@/components/loader";
import {redirect} from "next/navigation";
import {Bounce, toast} from "react-toastify";

export default function Teams() {
  
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const emailValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("email"))
      ?.split("=")[1];
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken"))
      ?.split("=")[1];
    if (!emailValue || !accessToken) {
      redirect("/login");
    }
    const fetchData = async () => {
      setLoading(true);
      if (!emailValue || !accessToken) {
        toast.error("Email or Access Token not found in cookies", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

        setLoading(false);
        return;
      } else {
        const data = await GetDomains(emailValue, accessToken);
        setData(data);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen">
      {loading ? (
        <Loader visibility={true} /> // Display Loader while data is fetched
      ) : (
        <>
          <JoinTeam
            teamName="Management"
            order="1"
            titles={["P&M", "Editotrial", "Events"]}
            selectedDomains={
              data.management?.map((item: any) => item.subdomain) || []
            }
          />
          <JoinTeam
            teamName="Tech"
            order="2"
            titles={["App", "Web", "AI/ML", "Research", "DevOps"]}
            selectedDomains={
              data.tech?.map((item: any) => item.subdomain) || []
            }
          />
          <JoinTeam
            teamName="Design"
            order="1"
            titles={["UI/UX", "Graphic Design", "Video"]}
            selectedDomains={
              data.design?.map((item: any) => item.subdomain) || []
            }
          />
          <div className=" flex justify-center items-center mb-36">
            <Link href="/dashboard">
              <Button text="Go to Dashboard" />
            </Link>
          </div>
          <ScrollIndicator />
        </>
      )}
    </main>
  );
}
