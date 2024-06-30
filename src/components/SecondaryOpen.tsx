
interface SecondaryOpenProps {
    article: {
        id: string;
        byline: {
            text: string;
        };
        head: string;
        teaser: string;
        image: string;
    } | undefined;
}

const SecondaryOpen: React.FC<SecondaryOpenProps> = ({article}) => {

    const imageSrc = article ? require(`../assets/${article.image}`) : null;

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-1/2 overflow-hidden">
                <img src={imageSrc} alt={article?.head} className="-my-5"></img>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-between text-justify p-3">
                <p className="text-2xl font-semibold">{article?.head}</p>
                <p className="flex-grow text-lg">{article?.teaser}</p>
                <p className="text-lg font-extrabold">{article?.byline.text}</p>
            </div>
        </div>
    )
}

export default SecondaryOpen;