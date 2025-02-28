import ArticleContent from './articleContent';

export default async function ArticlePage({ params } : {params: Promise<{ article: string }>}) {
  const articleId = (await params).article

  console.log(articleId, 'page - articles')
  return (
      <main className="container mx-auto mt-10 max-w-3xl">
        <article className="flex flex-col bg-white p-8 shadow-lg rounded-xl">
          <ArticleContent id={articleId} />
        </article>
      </main>
  );
}
