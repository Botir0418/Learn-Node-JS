const news = [
    {
        id: 1,
        title: 'Газ «заправка»ларининг иш вақти яна чекланди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 2,
        title: 'Фуқаролик олиш тартиби ўзгаради: Ўзбекистонда яшаш гувоҳномасини 2005 йилгача олиш бўйича талаб бекор қилинди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 3,
        title: 'Дилшод Эшнаев нега президентнинг диний соҳадаги ислоҳотлари эътироф этилган мақолаларни олдириб ташламоқчи бўлди?',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 4,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 5,
        title: 'Хоразмда «Ёшлар – келажагимиз» давлат дастури асосида ажратилган ер сотиб юборилди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 6,
        title: 'Газ «заправка»ларининг иш вақти яна чекланди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 7,
        title: 'Газ «заправка»ларининг иш вақти яна чекланди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 8,
        title: 'Газ «заправка»ларининг иш вақти яна чекланди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 9,
        title: 'Газ «заправка»ларининг иш вақти яна чекланди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 10,
        title: 'Газ «заправка»ларининг иш вақти яна чекланди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 11,
        title: 'Газ «заправка»ларининг иш вақти яна чекланди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 12,
        title: 'Газ «заправка»ларининг иш вақти яна чекланди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 13,
        title: 'Газ «заправка»ларининг иш вақти яна чекланди',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 14,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 15,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 16,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 17,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 18,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 19,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 20,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 21,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 22,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 23,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 24,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 25,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 26,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 27,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 28,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 29,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    },
    {
        id: 30,
        title: '«Асосий тирикчилигимиз – шоличилик» — Аҳмаджон Одилов қурдирган қишлоқда бир кун',
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, provident.",
        img: "https://storage.kun.uz/source/thumbnails/_medium/7/o5GYyoh2iaeUU487KDKjLeVhZLhCh9tP_medium.jpg"
    }
]
module.exports = news;