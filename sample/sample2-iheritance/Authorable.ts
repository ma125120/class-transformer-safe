import {Type, Exclude} from "../../src/decorators";
import {User} from "./User";

export class Authorable {
    
    authorName: string;

    @Exclude()
    authorEmail: string;
    
    @Type(() => User)
    author: User;

}