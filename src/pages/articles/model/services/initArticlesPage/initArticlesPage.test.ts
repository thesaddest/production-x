import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { initArticlesPage } from "./initArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("initArticlesPage.test", () => {
    test("fulfilled fetch", async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                hasMore: true,
                _inited: false,
            },
        });
        // await thunk.callThunk({test: "?test"});

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({ page: 1 });
    });

    test("initArticlesPage wasn't called because state is already inited", async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                hasMore: false,
                _inited: true,
            },
        });
        // await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
