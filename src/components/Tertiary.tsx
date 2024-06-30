import React, { useState } from "react";
import TertiaryArticle from "./TertiaryArticle";

interface TertiaryProps {
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

const Tertiary: React.FC<TertiaryProps> = ({articles}) => {

    const [opened, setOpened] = useState('377');

    return (
        <div className="w-full h-full flex flex-col gap-2">
            {articles?.map(article => {
                return (
                    <TertiaryArticle key={article.id} article={article} opened={opened} setOpened={setOpened}/>
                )
            })}
        </div>
    )
}

export default Tertiary;