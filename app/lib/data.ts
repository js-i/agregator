// import { apikey } from "@/.env/api";
export type Article = {
    id: number,
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
};

export type TempArticles = {
    articles?: Article[]
}

export async function getData(): Promise<TempArticles> {
   
    // const url = 'https://gnews.io/api/v4/search?q=psychology&lang=ru&country=ru&max=10&apikey=' + apikey;

    // const resp = await fetch(url)    
    // const data = await resp.json()
    const tempArticles: TempArticles = {}
    await new Promise<void>((resolve) => setTimeout(() => {
        tempArticles.articles = articles
        resolve()
    }, 2000))
    // console.log(data, 'timeout is ended')
    return tempArticles
}
 
export async function getArticle(id: number) : Promise<Article> {
    const res = articles.filter(art => art.id == id)   

    return res[0] 
}

const articles = [
    {
      id: 1,  
      title: 'Ученые рассказали об опасности одиночества для сердца',
      description: 'Одиночество негативно влияет на сердечно-сосудистую систему. К такому выводу пришли ученые из Тяньцзиньского университета в КНР, результаты исследования опубликованы в журнале Biological Psychology (BioPsy)',
      content: 'BioPsy: сердце и сосуды хуже переносят стрессовые ситуации из-за одиночества\nОдиночество негативно влияет на сердечно-сосудистую систему. К такому выводу пришли ученые из Тяньцзиньского университета в КНР, результаты исследования опубликованы в журна... [877 chars]',
      url: 'https://lenta.ru/news/2024/12/30/uchenye-rasskazali-ob-opasnosti-odinochestva-dlya-serdtsa/',
      image: 'https://icdn.lenta.ru/images/2024/12/30/23/20241230234645967/share_d2becfc270b0297800be4b449a8e0ba1.jpg',
      publishedAt: '2024-12-29T21:00:00Z',

    },
    {
        id: 2,  
      title: 'Мужчины назвали скрытые причины своих измен',
      description: 'Психолог Джеффри Бернстайн рассказал, что мужчины называют причинами своих измен. В колонке для Psychology Today эксперт поделился историями двух своих клиентов, которые были неверны женам',
      content: 'Психолог Джеффри Бернстайн рассказал, что мужчины называют причинами своих измен. В колонке для Psychology Today эксперт поделился историями двух своих клиентов, которые были неверны женам.\nПо словам Бернстайна, один из его клиентов, мужчина по имени... [1220 chars]',
      url: 'https://lenta.ru/news/2024/12/11/muzhchiny-nazvali-skrytye-prichiny-svoih-izmen/',
      image: 'https://icdn.lenta.ru/images/2024/12/10/14/20241210143154486/share_7bc363122d88ef7a8bfc2768d2f0b176.jpg',
      publishedAt: '2024-12-10T21:00:00Z',

    },
    {
        id: 3,  
      title: 'Ученые назвали признак, объединяющий одиноких людей',
      description: 'Ученые из Колумбийского и Стэнфордского университетов США пришли к выводу, что у одиноких людей формируется своеобразное восприятие мира. Исследование опубликовали в журнале Communications Psychology .',
      content: 'Ученые из Колумбийского и Стэнфордского университетов США пришли к выводу, что у одиноких людей формируется своеобразное восприятие мира. Исследование опубликовали в журнале Communications Psychology.\nВ научном эксперименте приняли участие более 1000... [760 chars]',
      url: 'https://www.gazeta.ru/social/news/2024/12/02/24520268.shtml',
      image: 'https://img.gazeta.ru/files3/843/19330843/79-pic_32ratio_900x600-900x600-15596.jpg',
      publishedAt: '2024-12-02T03:52:01Z',

    },
    {
        id: 4,  
      title: 'Ученые назвали признак, объединяющий одиноких людей',
      description: 'Исследование, опубликованное в журнале Communications Psychology, показало, что одиночество не только влияет на эмоциональное состояние, но и изменяет мышление и речь. Ученые обнаружили у одиноких людей уникальные нейронные и языковые реакции на культурные феномены и известных личностей, нарушая культурный консенсус.',
      content: 'Исследование, опубликованное в журнале Communications Psychology, показало, что одиночество не только влияет на эмоциональное состояние, но и изменяет мышление и речь. Ученые обнаружили у одиноких людей уникальные нейронные и языковые реакции на куль... [1105 chars]',
      url: 'https://www.mk.ru/science/2024/12/02/uchenye-nazvali-priznak-obedinyayushhiy-odinokikh-lyudey.html',
      image: 'https://static.mk.ru/upload/entities/2024/12/02/02/articles/facebookPicture/10/90/b4/05/7cb9063df4bf23c0c8a976bbbae42bb8.jpg',
      publishedAt: '2024-12-01T23:02:19Z',

    },
    {id: 5,  
      title: 'Назван способ оживить сексуальные отношения',
      description: 'Сексолог, психотерапевт Кейтлин Кантор рассказала, что партнеры часто теряют интерес к сексу со временем, и с годами интимная близость становится чрезвычайно редкой. В авторской колонке для Psychology Today эксперт назвала способ оживить сексуальную жизнь',
      content: 'Сексолог, психотерапевт Кейтлин Кантор рассказала, что партнеры часто теряют интерес к сексу со временем, и с годами интимная близость становится чрезвычайно редкой. В авторской колонке для Psychology Today эксперт назвала способ оживить сексуальную ... [1285 chars]',
      url: 'https://lenta.ru/news/2024/10/14/nazvan-sposob-ozhivit-seksualnye-otnosheniya/',
      image: 'https://icdn.lenta.ru/images/2024/10/11/20/20241011200451931/share_19c784c821eb094b3648200333d890ae.jpg',
      publishedAt: '2024-10-13T21:00:00Z',
  
    },
    {id: 6,  
      title: 'Пожилые люди чаще идут на необдуманные траты, выяснили ученые',
      description: 'Британские ученые из Бирмингемского и Оксфордского университетов узнали, что пожилые люди более склонны принимать импульсивные финансовые решения по сравнению с молодыми людьми. Исследование опубликовано в научном журнале Communications Psychology (CommsPsy).',
      content: 'Британские ученые из Бирмингемского и Оксфордского университетов узнали, что пожилые люди более склонны принимать импульсивные финансовые решения по сравнению с молодыми людьми. Исследование опубликовано в научном журнале Communications Psychology (C... [1406 chars]',
      url: 'https://www.gazeta.ru/science/news/2024/09/23/23986207.shtml',
      image: 'https://img.gazeta.ru/files3/255/14284255/RIAN_6485439.HR-pic_32ratio_900x600-900x600-49323.jpg',
      publishedAt: '2024-09-23T15:23:56Z',

    },
    {id: 7,  
      title: 'Ученые определили точку невозврата при разрыве отношений',
      description: 'Немецкие психологи из Бернского университета и Университета Майнца определили критический показатель, после достижения которого пары расстаются. Исследование опубликовано в научном  журнале Journal of Personality and Social Psychology (JPSP).',
      content: 'Немецкие психологи из Бернского университета и Университета Майнца определили критический показатель, после достижения которого пары расстаются. Исследование опубликовано в научном журнале Journal of Personality and Social Psychology (JPSP) Специали... [1764 chars]',
      url: 'https://www.gazeta.ru/science/news/2024/09/11/23904151.shtml',
      image: 'https://img.gazeta.ru/files3/640/13459640/Depositphotos_211695126_l-2015-pic905-895x505-12406.jpg',
      publishedAt: '2024-09-11T22:04:42Z',

    },
    {id: 8,  
      title: 'Ученые выяснили, что шанс найти счастье в отношениях или без них зависит от типа личности',
      description: 'Канадские ученые из Университета Торонто изучили взаимосвязь между счастьем человека и типом его личности как в отношениях, так и в одиночестве. Исследование опубликовано в научном журнале Society for Personality and Social Psychology (SPSP).',
      content: 'Канадские ученые из Университета Торонто изучили взаимосвязь между счастьем человека и типом его личности как в отношениях, так и в одиночестве. Исследование опубликовано в научном журнале Society for Personality and Social Psychology (SPSP).\n',
      url: 'https://www.gazeta.ru/science/news/2024/04/11/22758824.shtml',
      image: 'https://img.gazeta.ru/files3/942/15023942/brooke-cagle-Y3L_ZQaw9Wo-unsplash-pic_32ratio_900x600-900x600-48233.jpg',
      publishedAt: '2024-04-11T00:21:21Z',
    },
    {
        id: 8,  
      title: 'Ученые назвали причину трудностей при изучении сразу нескольких иностранных языков',
      description: 'Нидерландские ученые из Института психолингвистики Макса Планка выяснили, что люди могут столкнуться с трудностями при одновременном изучении нескольких иностранных языков. Исследование опубликовано в научном журнале Quarterly Journal of Experimental Psychology (QJEP).',
      content: 'Нидерландские ученые из Института психолингвистики Макса Планка выяснили, что люди могут столкнуться с трудностями при одновременном изучении нескольких иностранных языков. Исследование опубликовано в научном журнале Quarterly Journal of Experimental... [1271 chars]',
      url: 'https://www.gazeta.ru/science/news/2024/04/02/22689457.shtml',
      image: 'https://img.gazeta.ru/files3/801/16099801/RIA_6162830-pic_32ratio_900x600-900x600-13688.jpg',
      publishedAt: '2024-04-02T16:58:00Z',
    },
    {id: 9,  
      title: 'Психологи выяснили, что соцсеть X Илона Маска делает людей нервными и несчастными',
      description: 'Канадские ученые из Университета Торонто изучили влияние социальной сети X (ранее — Twitter) бизнесмена Илона Маска на психику пользователей. Исследование опубликовано в научном журнале  Communications Psychology (CommPsy).',
      content: 'Канадские ученые из Университета Торонто изучили влияние социальной сети X (ранее — Twitter) бизнесмена Илона Маска на психику пользователей. Исследование опубликовано в научном журнале Communications Psychology (CommPsy).\n',
      url: 'https://www.gazeta.ru/science/news/2024/02/29/22448378.shtml',
      image: 'https://img.gazeta.ru/files3/588/17321588/F1yPk5VXoAA3rGZ-pic_32ratio_900x600-900x600-99890.jpg',
      publishedAt: '2024-02-29T14:15:16Z',

    }
  ]
