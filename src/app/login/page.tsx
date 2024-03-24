import Image from "next/image";
import Button from "@/components/button";

export default function Login() {
  return (
    <div className="w-screen  h-screen md:h-screen flex flex-col items-center justify-center">
      <div className="w-[80vw] md:w-screen flex flex-col items-center justify-between">
        <Image
          src={"/login-splash.svg"}
          alt="Login splash"
          width={800}
          height={800}
          loading="lazy"
          style={{
            marginBottom: "10vh",
          }}
        />
        <Button text="Continue with google" onClick={() => {}} />
      </div>
    </div>
  );
}
