import './App.css';
import Primary from './components/Primary';
import Secondary from './components/Secondary';
import Tertiary from './components/Tertiary';
import news from './assets/news.json';

interface Article {
  id: string;
  byline: {
      text: string;
  };
  head: string;
  teaser: string;
  image: string;
}

function App() {

  const primaryArticle: Article | undefined = news.articles.find(article => article.id === '779');
  const secondaryArticles: Article[] | undefined = news.articles.filter(article => ['038', '310', '001', '204'].includes(article.id))
  const tertiaryArticles: Article[] | undefined = news.articles.filter(article => ['377', '525', '307', '108', '596', '509'].includes(article.id))

  return (
    <div className='w-screen h-screen p-4 flex gap-3'>
      <div className='w-3/4 h-full flex flex-col gap-3'>
        <div className='h-[45%]'>
          <Primary article={primaryArticle} />
        </div>
        <div className='h-[55%]'>
          <Secondary articles={secondaryArticles} />
        </div>
      </div>
      <div className='h-full w-[2px] flex flex-col gap-3'>
        <div className='h-[45%] min-h-[45%] w-[2px] bg-gray-300'></div>
        <div className='h-[55%] w-[2px] min-h-[45%] bg-gray-300'></div>
      </div>
      <div className='w-1/4 h-full'>
        <Tertiary articles={tertiaryArticles} />
      </div>
    </div>
  );
}

export default App;
