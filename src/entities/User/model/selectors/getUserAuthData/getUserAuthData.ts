import { StateSchema } from "app/providers/StoreProvider";
import { stat } from "fs";

export const getUserAuthData = (state:StateSchema) => state.user.authData;