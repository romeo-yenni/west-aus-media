import React from "react";
import SecondaryOpen from "./SecondaryOpen";
import SecondaryClosed from "./SecondaryClosed";

interface SecondaryProps {
    articles: {
        id: string;
        byline: {
            text: string;
        };
        head: string;
        teaser: string;
        image: string;
    }[]
}

interface Article {
    id: string;
    byline: {
        text: string;
    };
    head: string;
    teaser: string;
    image: string;
  }

const Secondary: React.FC<SecondaryProps> = ({articles}) => {

    const article038: Article | undefined = articles?.find(article => article.id === '038');
    const article310: Article | undefined = articles?.find(article => article.id === '310');
    const article001: Article | undefined = articles?.find(article => article.id === '001');
    const article204: Article | undefined = articles?.find(article => article.id === '204');
    
    return (
        <div className="w-full h-full flex">
            <div className="h-full w-1/3">
                <SecondaryOpen article={article038} />
            </div>
            <div className="w-[2px] h-[99%] bg-slate-300 ml-2"></div>
            <div className="h-full w-1/3 flex flex-col">
                <SecondaryClosed article={article001}/>
                <div className="w-[95%] h-1 bg-gray-300 mx-auto"></div>
                <SecondaryClosed article={article204}/>
            </div>
            <div className="w-[2px] h-[99%] bg-slate-300 mr-2"></div>
            <div className="h-full w-1/3">
                <SecondaryOpen article={article310} />
            </div>

        </div>
    )
}

export default Secondary;