export default function Hero() {
    return (
        <>
            <div className="flex flex-col justify-center h-[85%] ml-20 max-[1700px]:ml-12 max-[1000px]:ml-12 max-[700px]:ml-4">
                <div className="inline-block w-fit">
                    <h1 className="text-[38px] text-white font-medium overflow-hidden whitespace-nowrap animate-typing border-r-2 border-r-white pr-1 max-[1700px]:text-[40px] max-[700px]:text-[30px] max-[390px]:text-[30px] max-[375px]:text-[27px]">
                        Felipe Rodrigues
                    </h1>
                    <h2 className="text-[#9B9B9B] font-normal text-[28px] max-[1700px]:text-[30px] max-[700px]:text-[27px] max-[390px]:text-[27px] max-[375px]:text-[24px]">
                        Dev Full-Stack
                    </h2>
                </div>
                <hr className="text-[#ADADAD] h-px w-1/2 mt-8" />
                <p className="mt-5 text-[48px] max-w-[60vw] text-white font-light max-[1700px]:text-[30px] max-[1700px]:max-w-[1000px] max-[1400px]:max-w-[800px] max-[1000px]:text-[30px] max-[1000px]:max-w-[600px] max-[700px]:text-[23px] max-[390px]:text-[20px] max-[375px]:text-[18px]">
                    Desafio a lógica para criar soluções que não apenas funcionam, mas também encantam.
                    Como desenvolvedor Full Stack, minha missão é construir pontes entre ideias e realidade,
                    um pixel de cada vez. 🚀💻✨
                </p>
            <img 
                className="w-18 absolute bottom-5 left-1/2 animate-float max-[1700px]:w-16 max-[700px]:w-[70px] max-[390px]:w-[60px] max-[375px]:w-[50px]" 
                src="down-arrow.png" 
                alt="Seta para baixo" 
            />
            </div>
        </>
    )
}