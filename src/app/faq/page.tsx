"use client";
import Carousel from "@/components/carousel";
import Image from "next/image";

export default function Faq(){

    const FAQs:Array<{
        question:string,
        answer:string
    }> = [{
        question:'What qualifications do I need to join the technical chapter?',
        answer:"Typically, we look for students with a strong interest and some background in technical fields such as computer science, engineering, or related disciplines. Specific requirements may vary, so please refer to our recruitment guidelines for details."
    },
        {
            question:'What is IEEE-CS?',
            answer:"IEEE-CS stands for Institute of Electrical and Electronics Engineers - Computer Society. It's a professional organization dedicated to advancing technology in the field of computer science and engineering. Our chapter at VIT focuses on fostering technical skills, networking opportunities, and professional development for students."
        },
        {
            question:'What are the benefits of joining IEEE-CS at VIT?',
            answer:"Joining IEEE-CS at VIT offers numerous benefits, including access to workshops, seminars, and conferences on the latest trends in technology. You'll also have the opportunity to collaborate on projects, network with industry professionals, and enhance your technical skills. Additionally, being a part of IEEE-CS can boost your resume and open up internship and job opportunities."
        },
        {
            question:'How can I join IEEE-CS at VIT?',
            answer:"To join IEEE-CS at VIT, you can participate in our recruitment process, which typically includes filling out an application, attending informational sessions, and completing tasks or quizzes to demonstrate your interest and skills. Keep an eye on our social media channels and website for updates on recruitment dates and requirements."
        },
        {
            question:'What domains or activities does IEEE-CS at VIT offer?',
            answer:"IEEE-CS at VIT offers a wide range of domains and activities to cater to different interests and skill sets. These may include software development, artificial intelligence, cybersecurity, data science, robotics, and more. As a member, you'll have the opportunity to explore these domains through workshops, projects, and hands-on learning experiences."
        },
        {
            question:'Are there any membership fees for joining IEEE-CS at VIT?',
            answer:"Yes, there may be nominal membership fees associated with joining IEEE-CS at VIT. These fees help support chapter activities, events, and resources provided to members. However, we strive to keep the fees affordable to ensure accessibility for all students. Detailed information about membership fees will be provided during the recruitment process."
        },
        {
            question:'How can I stay updated with IEEE-CS events and activities at VIT?',
            answer:"To stay updated with IEEE-CS events and activities at VIT, make sure to follow us on our social media channels, including Facebook, Instagram, and Twitter. You can also regularly check our website and subscribe to our newsletter for announcements, event schedules, and other important updates."
        }
    ]
    return <section className="flex flex-col w-screen items-center justify-center min-h-screen pt-16">
        <div className="flex flex-row items-center justify-center ">
          <div className="w-1/4 h-auto">
          <Image
            src="/graphics/left-lines.svg"
            alt="left-lines"
            width={500}
            height={100}
          />

          </div>
          <h2 className="text-4xl md:text-7xl text-center text-white mx-5 font-striger">
            FAQ
          </h2>
          <div className="w-1/4 h-auto">
          <Image
            src="/graphics/right-lines.svg"
            alt="right-lines"
            width={500}
            height={100}
          />

          </div>
        </div>
        <Carousel questions={FAQs}/>
    </section>
}