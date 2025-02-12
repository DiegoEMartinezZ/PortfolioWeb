import Subtitle from "../UI/texts/Subtitle";
import Title from "../UI/texts/Title";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import IconText from "../UI/texts/IconText";
import CopyEmail from "../UI/buttons/CopyEmail";
import SectionSocialMedia from "../UI/socialMedia/SectionSocialMedia";
import { useState } from "react";

const AboutMe = () => {
  const [copied, setCopied] = useState(false);

  const textToCopy = "diermaza.23@gmail.com";
  const copyEmailhandle = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <>
      <section className="relative text-white text-center h-auto pt-16 mx-4">
        <div className="flex-col ">
          <div className="text-center">
            <Title text={"Diego Martinez"} />
            <Subtitle text={"Frontend Developer | Digital Designer"} />
            <IconText text={"Bogota / Colombia"} icon={faLocationDot} />
            {copied && (
              <p className="mt-4 bg-teal-300 absolute rounded-xl top-0 w-fit m-auto p-2 px-4 right-0 left-0 text-black text-sm">
                Mail copied to clipboard!
              </p>
            )}
            <section>
              <ul className="flex-col m-auto w-fit mx-auto justify-center items-center">
                <CopyEmail
                  copied={copied}
                  handle={copyEmailhandle}
                  email={textToCopy}
                  icon={faEnvelope}
                />

                <SectionSocialMedia />
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
