import Btn from "./btn";
import { FaArrowRight } from "react-icons/fa";
import SlideUp from "./slideUp";
import FrameComponent from "./frame-component";
import { useState } from "react";

export default function HomeFourthBanner({ className = "" }) {
  const [openAccordions, setOpenAccordions] = useState(Array(5).fill(false));

  const toggleAccordion = (index) => {
    setOpenAccordions((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const faqData = [
    {
      question: "Q. 첫 번째 질문",
      answer: "첫 번째 질문에 대한 답변입니다.",
    },
    {
      question: "Q. 두 번째 질문",
      answer: "두 번째 질문에 대한 답변입니다.",
    },
    {
      question: "Q. 세 번째 질문",
      answer: "세 번째 질문에 대한 답변입니다.",
    },
    {
      question: "Q. 네 번째 질문",
      answer: "네 번째 질문에 대한 답변입니다.",
    },
    {
      question: "Q. 다섯 번째 질문",
      answer: "다섯 번째 질문에 대한 답변입니다.",
    },
  ];

  return (
    <section
      className={`w-full bg-grayscale-grayscale-900 overflow-hidden flex flex-col items-center justify-center px-[10vw] py-[10vh] box-border text-center text-9xl text-grayscale-grayscale-0 font-pretendard  ${className}`}
    >
      <div className="flex flex-row items-start justify-start relative w-full">
        <img
          className="h-[380.3px] w-[322.4px] absolute !m-[0] right-[-168.4px] bottom-[-166.3px] overflow-hidden shrink-0 object-contain"
          alt=""
          src="/frame@2x.png"
        />
        <div className="flex-1 flex flex-col items-center justify-start gap-[42px] max-w-full z-[1] mq750:gap-[21px]">
          <div className="w-full text-2xl">
            <span>트레이딩부스트에서</span>
            <br />
            <b className="text-3xl text-deeppink-100">자주 묻는 질문</b>
            <span>입니다.</span>
          </div>

            <div className="w-full flex flex-col items-start justify-start gap-[17px] text-base mt-12 md:mt-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`w-full ${
                    openAccordions[index] ? "max-h-[1000px]" : "max-h-16"
                  } rounded-xl bg-lightgoldenrodyellow border-pink-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[23px] transition-all duration-500 ease-in-out overflow-hidden`}
                >
                  <div
                    className="w-full flex flex-row items-center justify-between cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <b className="h-6 flex-grow relative tracking-[-0.01em] leading-[150%] inline-block">
                      {faq.question}
                    </b>
                    <img
                      className={`h-6 w-6 relative overflow-hidden shrink-0 transition-transform duration-500 ${
                        openAccordions[index] ? "rotate-180" : ""
                      }`}
                      alt=""
                      src={openAccordions[index] ? "/minus.svg" : "/plus.svg"}
                    />
                  </div>
                  <div
                    className={`mt-4 text-left text-grayscale-grayscale-300 transition-all duration-500 ease-in-out ${
                      openAccordions[index]
                        ? "opacity-100 max-h-[1000px]"
                        : "opacity-0 max-h-0"
                    }`}
                  >
                    <div className="flex flex-row items-start gap-2">
                      <div className="tracking-[-0.01em] leading-[150%]">
                        A.
                      </div>
                      <div className="tracking-[-0.01em] leading-[150%]">
                        <p className="m-0">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>
      </div>
    </section>
  );
}
