'use client';
import Button from "@/components/button";
import {firebaseConfig} from "@/firebase.config"
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, User} from "firebase/auth";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {Bounce, toast} from "react-toastify";

function validateEmail(email: string | null) {
  if (typeof email === "undefined" || email === null) return false;
  if (email.endsWith("@vitstudent.ac.in")) {
    return true;
  } else {
    return false;
  }
}

export default function AdminLogin() {
  const router = useRouter();

  useEffect(() => {
    // Check if the router is available
    if (!router) return;
    // Your router-related logic here
  }, [router]);

  function verifyAdminUser(user: User) {
    axios
      .post("https://url/check_admin_user", { email: user.email })
      .then((response) => {
        if (response.status === 200) {
          document.cookie = `email=${user.email}; path=/`;
          document.cookie = `token=${response.data.accessToken}; path=/`;
          // Redirect to admin dashboard if user is an admin
          router.push("/admin/dashboard");
        } else {
            toast.error('User is not an admin', {
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
      })
      .catch((error) => {
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
      });
  }

  function handleLogin() {
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      hd: "vitstudent.ac.in",
      prompt: "select_account",
    });
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if (!validateEmail(user.email)) {
            toast.error("Please login with admin email", {
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
          signOut(auth);
        } else {
          verifyAdminUser(user);
        }
      })
      .catch((error) => {
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
      });
  }

  return (
    <div className="w-screen h-screen md:h-screen flex flex-col items-center justify-center">
      <div className="w-[80vw] md:w-screen flex flex-col items-center justify-center">
        <Button text="Continue with Google Admin Sir" onClick={handleLogin} />
      </div>
    </div>
  );
}