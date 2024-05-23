import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {CounterState, IAddItem, IComment, IMountains} from "../../app/interfaces";



const initialItems: IMountains = {
    "Россия": [
        {
            title: 'Эльбрус',
            description: "Эльбрус – это самая высокая гора России и Европы, достигающая высоты 5642 метра над уровнем моря. Я был на вершине Эльбруса, и это было одно из самых незабываемых путешествий в моей жизни. Путь до вершины начинается с базового лагеря на высоте около 3500 метров, где мы провели несколько дней, адаптируясь к высоте и изучая технику восхождения. Восхождение на самую высокую точку Кавказа требует от вас физической подготовки, терпения и уверенности в своих силах. Вершина Эльбруса открывает захватывающий вид на окружающие горы и долины, делая каждое усилие по пути наверх оправданным.",
            imgUrl: "/img/example.png",
            id: 0,

        },
        {
            title: 'Монголский хребет',
            description: "Монгольский хребет – это одна из самых красивых и менее известных горных систем в России. Моё путешествие началось в городе Улан-Уде, откуда мы отправились в поход на одну из его вершин. Хребет известен своими уникальными ландшафтами, включая множество озёр, водопадов и густые леса. Путь до вершины был полон приключений, включая ночлег в палатке под открытым небом и посещение местных деревень, где нас приняли с гостеприимством. Вершина Монгольского хребта предлагает невероятные виды на окрестности и возможность погрузиться в мир природы, который кажется далеким от обыденной жизни.",
            imgUrl: "https://a.d-cd.net/6BAAAgBe0eA-960.jpg",
            id: 1,
        },
        {
            title: 'Алтайские горы',
            description: "Алтайские горы – это место, где я почувствовал себя настоящим альпинистом. Эти горы расположены в южной части Западного Сибирского региона и известны своей красотой и разнообразием ландшафтов. Мы начали наш путь в городе Барнаул, откуда отправились в поход на одну из многих вершин Алтая. Путь до вершины был сложным и требовал хорошей физической подготовки, но каждый шаг того стоил. Вершина открывала великолепный вид на окрестности, а также возможность наблюдать за закатом солнца прямо перед нами. Это путешествие оставило в моем сердце глубокие впечатления от величия природы и сил человеческого духа.",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMRa37tXP3NdLXwT-2FkuxUQm0PTw7G8hAz292nJACA&s",
            id: 2,
        }
    ],
    "Непал": [
        {
            title: 'Эверест',
            description: "Эверест – это вторая по высоте гора в мире, расположенная на границе между Непалом и Тибетом. Я был на вершине Эвереста, и это было одним из самых трудных и одновременно самых вдохновляющих путешествий в моей жизни. Путь до вершины начинается в базовом лагере на высоте около 5400 метров, откуда начинается восхождение через серию лагерей, каждый из которых находится выше предыдущего. Восхождение на Эверест требует от вас не только высокой физической формы, но и огромного мужества, поскольку условия на вершине могут быть крайне опасными. Но несмотря на все трудности, вершина Эвереста открывает невероятные виды на Гималаи и позволяет ощутить величие мира вокруг. Это путешествие оставило в моем сердце глубокие впечатления от силы человеческого духа и красоты природы.",
            imgUrl: "https://avatars.mds.yandex.net/i?id=5826ffd49ef249adccfc55327797ec521843964f-9858868-images-thumbs&n=13",
            id: 3,
        },
        {
            title: 'Макалу',
            description:
                "Макалу – это пятая по высоте гора в мире, расположенная на границе между Непалом и Индией. Я был на вершине Макалу, и это было одно из самых запоминающихся путешествий в моей жизни. Путь до вершины начинается в базовом лагере на высоте около 5000 метров, откуда начинается восхождение через серию лагерей, каждый из которых находится выше предыдущего. Восхождение на Макалу требует от вас не только высокой физической формы, но и огромного мужества, поскольку условия на вершине могут быть крайне опасными. Но несмотря на все трудности, вершина Макалу открывает невероятные виды на Гималаи и позволяет ощутить величие мира вокруг. Это путешествие оставило в моем сердце глубокие впечатления от силы человеческого духа и красоты природы.",
            imgUrl:
                "https://avatars.mds.yandex.net/i?id=0700371e5c6df2d920ddc5dfb017227a2cfec6f5-10391931-images-thumbs&n=13",
            id: 4,
        }
    ]
}


const initialState: CounterState = {
    items: initialItems,
    comments: []
    // Вынесено для упрощения работы с комментариям
};


export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addCountry: (state, action: PayloadAction<string>) => {
            state.items[action.payload] = []
        },
        removeCountry: (state, action: PayloadAction<string>) => {
            delete state.items[action.payload]

        },
        addItem: (state, action: PayloadAction<IAddItem>) => {
            const items = Object.values(state.items).flat()
            const lastId = Math.max(...items.map((item) => item.id)) + 1
            state.items[action.payload.country] = [...state.items[action.payload.country], {
                ...action.payload.info,
                id: lastId
            }]
        },
        removeItem: (state, action: PayloadAction<number>) => {
            for (const country in state.items) {
                state.items[country] = state.items[country].filter(item => item.id !== action.payload);
            }
        },
        addComment: (state, action: PayloadAction<IComment>) => {
            if(state.comments.length > 0) {
                action.payload.id = state.comments[state.comments.length - 1].id + 1
            }
            state.comments = [...state.comments, action.payload]
        },
        removeComment: (state, action: PayloadAction<number>) => {
            state.comments = state.comments.filter(comment => comment.id!== action.payload)
        }
    },
});

export const {addCountry, addItem, removeItem, removeCountry,addComment,removeComment} = itemSlice.actions;
export const getItems = (state: RootState) => state.items.items;
export const getComments = (state: RootState) => state.items.comments

export const getItemById = (id: number) => createSelector(
    (state: RootState) => state.items.items,
    (items) => Object.values(items).flat().find(item => item.id === id)
);
export const getCommentsById = (id: number) => createSelector(
    (state: RootState) => state.items.comments,
    (items) => items.filter((item)=> item.parentId === id)
);

export default itemSlice.reducer;
