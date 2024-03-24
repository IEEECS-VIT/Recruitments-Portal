import FaqCard from "./faqcard";

export default function Carousel(props: {
  questions: { question: string; answer: string }[];
}) {
  return (
    <section className="flex flex-col md:flex-row">
      {props.questions.map((faq) => {
        return <FaqCard question={faq.question} answer={faq.answer} />;
      })}
    </section>
  );
}
