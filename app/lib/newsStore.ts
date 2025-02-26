import { configureStore, createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { Article, getDataAPI } from './data' 
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

type newsState = {
    articles: { 
        entities: Record<string, Article>,
        ids: string[],
        selectedArt: string | undefined
    },
    loading: boolean,
    error: null | undefined | string
}

const initialNewsState: newsState = {
    articles: { 
        entities: {},
        ids: [],
        selectedArt: undefined
    },
    loading: false,
    error: null
}

export const fetchNews = createAsyncThunk('news/fetch', async () => {
    const response = await getDataAPI();
    return response.articles
})

export const newsSlice = createSlice({
    name: 'news',
    initialState: initialNewsState,
    selectors: {
        selectArticles: createSelector(
            (state: newsState) => state.articles.entities ?? {},
            (state: newsState) => state.articles.ids ?? [],
            (_: newsState, query: string ) => query,
            (entities, ids, query) => {
                return ids.map(id => entities[id]).filter(art => {
                    return art.title.toLowerCase().includes(query)|| art.description.toLowerCase().includes(query)
                })
            }),
        selectArticle: (state, id) => state.articles.entities[id],
    },
    reducers: {
        liked: (state, action) => {
            state.articles.entities[action.payload.id].liked = true  
        },
        unliked: (state, action) => {
            state.articles.entities[action.payload.id].liked = false  
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.articles.entities = action.payload.reduce((acc, art) => {
                        if (art.id) acc[art.id] = art // поправить потом типы
                        return acc
                }, {} as Record<string, Article>)}
                state.articles.ids = action.payload!.map(art => art.id!) // поправить потом типы
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export const newsStore = configureStore({
    reducer: {
        [newsSlice.name]: newsSlice.reducer,
    }
})

export type NewsStore = ReturnType<typeof newsStore.getState>
export type NewsDispatch = typeof newsStore.dispatch

export const useNewsDispatch: () => NewsDispatch = useDispatch
export const useNewsSelector: TypedUseSelectorHook<NewsStore> = useSelector;

