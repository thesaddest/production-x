import { STATE_STATUSES } from "shared/constants/state.constants";
import { Comment } from "entities/comment";
import { EntityState } from "@reduxjs/toolkit";

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    status: STATE_STATUSES;
    error?: string;
}
