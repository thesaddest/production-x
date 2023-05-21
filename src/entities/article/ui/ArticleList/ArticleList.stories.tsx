import type { Meta, StoryObj } from "@storybook/react";

import { Article, ArticleBlockType, ArticleType, ArticleView } from "../../model/types/article";
import { ArticleList } from "./ArticleList";

const meta: Meta<typeof ArticleList> = {
    title: "entities/article/ArticleList",
    component: ArticleList,
};

export default meta;

type Story = StoryObj<typeof meta>;

const article: Article = {
    id: "1",
    user: {
        id: "1",
        username: "test username",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU",
    },
    title: "Javascript news and more more more more more more more more more more",
    subtitle: "What's new in JS?",
    img: "https://habrastorage.org/getpro/habr/upload_files/47b/80a/93c/47b80a93c4010ff074c758b82b0d51f3.png",
    views: 1022,
    createdAt: "17.05.2023",
    type: [ArticleType.IT, ArticleType.SCIENCE, ArticleType.ECONOMICS],
    blocks: [
        {
            id: "1",
            type: ArticleBlockType.TEXT,
            title: "Header of the block",
            paragraphs: [
                "Недавно, в процессе реализации одного из модулей проекта, над которым я работаю - возникла проблема воспроизведения видео на web странице, а также возникли проблемы с его адаптацией под iPhone и iPad.",
                "Проблема была в следующем:",
                "Создал веб-страницу HTML5, на которой есть небольшое видео, создал свою control-panel  для плейера, и все отлично работает в Chrome и FireFox, но совсем не работает ни на iPhone, ни на iPad. Получаю просто пустую страницу.",
                "Реализация была следующей:",
            ],
        },
        {
            id: "4",
            type: ArticleBlockType.CODE,
            code: '<div>\n   <div data-tag="loader"> </div>\n   <video preload="none" loop playsinline="false" muted="true" data-tag="player" \nsrc="" type="video/mp4"></video>\n    <div type="button" data-tag="playMobile" </div>\n    <div class="player__control-panel">\n        <buttontype="button"data-tag="play"></button>\n        <buttontype="button"data-tag="pause"></button>\n        <div class="player__progress" data-tag="progress"></div>\n        <button type="button" data-tag="muted"></button>\n        <button type="button" data-tag="unmuted"></button>\n        <button data-tag="enterFullScreen" ></button>\n    </div>\n</div>',
        },
        {
            id: "5",
            type: ArticleBlockType.TEXT,
            paragraphs: [
                "Проблема иногда решаться атрибутом playsinline в теге video (Примечание для тех, кто использует React, вам нужно будет использовать playsinline, в camelCase). Но в моем случае это не сработало, тем более я хотел чтобы видео не воспроизводилось при загрузке страницы а только когда наживаем кнопку play и видео переходит в полноэкранный режим.",
                "Если вы хотите перейти в полноэкранный режим то придется написать код для проверки браузера, так как каждый браузер поддерживает свой метод. В том числе и Safari для IOS (Safari для iPhone не поддерживают некоторые фичи старшего брата):",
            ],
        },
        {
            id: "6",
            type: ArticleBlockType.CODE,
            code: "enterFullScreen() {\n        const elem = this.view.player;\n        if (elem.requestFullscreen) {\n            elem.requestFullscreen();\n        } else if (elem.webkitRequestFullscreen) {\n            /* Safari */\n            elem.webkitRequestFullscreen();\n        } else if (elem.webkitEnterFullscreen) {\n            /* Safari */\n            elem.webkitEnterFullscreen();\n        } else if (elem.msRequestFullscreen) {\n            /* IE11 */\n            elem.msRequestFullscreen();\n        } else if (elem.mozRequestFullScreen) {\n            /* Mozila */\n            elem.mozRequestFullScreen();\n        }\n        if (elem.fullscreenElement === null) {\n            this.view.player.pause();\n            this.view.player.controls = false;\n        }\n    }",
        },
        {
            id: "7",
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'Чтобы выйти из полноэкранного режима на iPhone и iPad через свайп назад, то придется также написать функцию для остановки видео при выходе. Если вы хотите чтобы не было видно панель с управлением видео, то при выходе из полноэкранного режима вам нужно указать playsinline="false" , иначе будут видны стандартные элементы управления:',
            ],
        },
        {
            id: "8",
            type: ArticleBlockType.IMAGE,
            title: "That's me!",
            src: "https://habrastorage.org/getpro/habr/upload_files/840/3be/111/8403be111de0fa78afe08344d4e9e507.jpg",
        },
    ],
};

export const List: Story = {
    args: { articles: [article, article, article], view: ArticleView.LIST },
};

export const Tile: Story = {
    args: { articles: [article, article, article], view: ArticleView.TILE },
};

export const LoadingList: Story = {
    args: { isLoading: true, articles: [], view: ArticleView.LIST },
};

export const LoadingTile: Story = {
    args: { isLoading: true, articles: [], view: ArticleView.TILE },
};
