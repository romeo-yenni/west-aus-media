
interface SecondaryClosedProps {
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
    
const SecondaryClosed: React.FC<SecondaryClosedProps> = ({article}) => {
    return (
        <div className="w-full h-full flex flex-col justify-between text-justify p-4">
            <p className="text-2xl font-semibold">{article?.head}</p>
            <p className="flex-grow text-lg">{article?.teaser}</p>
            <p className="text-lg font-extrabold">{article?.byline.text}</p>
        </div>
    )
}

export default SecondaryClosed;