"use client";
import axios from "axios";
import {Bounce, toast} from "react-toastify";

export const PutDomains = async (
  selectedDomains: string[],
  domain: string,
  emailValue: string,
  accessToken: string
) => {
  try {
    const response = await axios.put(
      `https://recruitments-portal-backend.vercel.app/put_domains/${domain.toLocaleLowerCase()}/${emailValue}`,
      {
        [domain.toLocaleLowerCase()]: selectedDomains,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      //add toast here

      toast.success('Successfully submitted', {
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

    } else {
      //add toast here
      toast.error('Failed to submit', {
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
    }
  } catch (error: Error | any) {
    toast.error(error.message, {
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
  }
};

export const GetDomains = async (emailValue: string, accessToken: string) => {
  try {
    const response = await axios.get(
      `https://recruitments-portal-backend.vercel.app/get_domains/${emailValue}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error: Error | any) {
    throw error;
  }
};
