import { HomeInterface } from "./HomeInterface";

/**
 * This interface type defines a Community object
 */
export interface CommunityInterface {
    id: string;
    name: string;
    imgUrl: string;
    group: string;
    homes: HomeInterface[];
    avgPrice: string;
}