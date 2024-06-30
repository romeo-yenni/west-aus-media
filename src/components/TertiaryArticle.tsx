
interface TertiaryArticleProps {
    article: {
        id: string;
        byline: {
            text: string;
        };
        head: string;
        teaser: string;
        image: string;
    };
    opened: string;
    setOpened: React.Dispatch<React.SetStateAction<string>>
}

const TertiaryArticle: React.FC<TertiaryArticleProps> = ({article, opened, setOpened}) => {

    const imageSrc = article ? require(`../assets/${article.image}`) : null;

    const handleMouseEnter = () => {
        setOpened(article?.id)
    }

    return (
        <div className={`w-full flex flex-col border-b-2 ${opened === article.id ? 'max-h-[45%]' : 'h-full'}`} onMouseEnter={handleMouseEnter}>
            <div className={`w-full h-1/2 overflow-hidden ${opened === article.id ? 'block' : 'hidden'}`}>
                <img src={imageSrc} alt={article?.head} className="object-cover"></img>
            </div>
            <div className="w-full h-1/2 flex flex-col gap-3 p-2">
                <p className="text-2xl font-extrabold">{article?.head}</p>
                <p className={`text-lg font-semibold ${opened === article.id ? 'block' : 'hidden'}`}>{article?.byline.text}</p>
            </div>
        </div>
    )
}

export default TertiaryArticle;