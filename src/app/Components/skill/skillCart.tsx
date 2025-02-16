import Image from "next/image";

type typeOfSkillCard = {
    icons: string;
    title: string;
    content?: string;
};

export function SkillCard({ icons, title, content }: typeOfSkillCard) {
    return (
        <div className="w-[8rem] border-[1px] rounded-[20px] p-[10px] shadow-[2px_2px_10px_0_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_10px_0_rgba(0,0,0,0.25)] shadow-[var(--text-color-gray)] hover:shadow-[var(--text-color-gray)] duration-300">
            <div className="flex justify-center items-center">
                <div className="relative w-[3rem] h-[3rem]">
                    {/* <Image
                        src={icons}
                        alt={title}
                        fill
                        sizes="100%"
                        placeholder="blur"
                        blurDataURL="/images/loading.jpg"
                    /> */}
                    <img
                        src={`./${icons}`}
                        alt={icons}
                        className="h-full w-full"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <p>{title}</p>
            </div>
        </div>
    );
}
