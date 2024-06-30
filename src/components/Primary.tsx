
interface PrimaryProps {
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

const Primary: React.FC<PrimaryProps> = ({article}) => {

    const imageSrc = article ? require(`../assets/${article.image}`) : null;

    return (
        <div className="flex w-full h-full">
            <div className="h-full flex flex-col flex-grow border-b border-gray-300 text-justify pr-5">
                <p className='text-5xl font-semibold'>
                    {article?.head}
                </p>
                <p className='flex-grow text-lg'>
                    {article?.teaser}
                </p>
                <p className='font-extrabold text-lg'>
                    {article?.byline.text}
                </p>
            </div>
            <div className="h-full relative overflow-hidden">
                <img src={imageSrc} alt={article?.head} className='-my-5' />
            </div>
        </div>
    );
}

export default Primary;
