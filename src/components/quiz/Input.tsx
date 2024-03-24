const Input = ({ setAnsArr, ansArr, questionNumber }) => {
  return (
    <div>
      <textarea
        onChange={(e) => {
          setAnsArr((prev: number[]) => {
            const newArr = [...prev];
            newArr[questionNumber - 1] = e.target.value.toString();
            return newArr;
          });
        }}
        value={ansArr[questionNumber - 1]}
        className="h-[40vh] w-full p-5 text-lg resize-none shadow-3xl border-main-blue border-2 focus:outline-none focus:border-4 bg-main-blue bg-opacity-50 backdrop-blur-[2px] focus:backdrop-blur-[3px] rounded-xl my-8 text-start"
      />
    </div>
  );
};

export default Input;
