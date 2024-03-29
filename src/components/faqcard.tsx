import Image from 'next/image'

export default function FaqCard(props:{indx:String,question:string,answer:string}){
    return <div
        className="backdrop-blur-sm flex flex-col  min-h-[30vh]  md:h-[60vh] rounded-xl opacity-100 bg-white bg-opacity-10 mt-10 mx-5  md:w-[21vw] border-main-blue border-8">
        <div className={"flex flex-row justify-center items-center mt-2"}>
            <Image
                src="/graphics/left-lines.svg"
                alt="left-lines"
                width={100}
                height={100}
            />
            <h2 className="text-center font-striger text-white text-3xl mx-2">
                {props.indx}
            </h2>
            <Image
                src="/graphics/right-lines.svg"
                alt="right-lines"
                width={100}
                height={100}
            />
        </div>

        {/*question*/}
        <section className={"font-striger text-xl text-white text-center md:min-h-[10vh]"}>
            {props.question}

        </section>
        <br></br>

        <section className={"font-sarpanch text-sm text-[#BBA8F2] text-center"}>
            {props.answer}

        </section>
    </div>

}