export type Topic = {

    id: string;
    title: string;
    icon: string;
    description?: string,
    level: number,
    progress: number,
    resources?: ResourceItem[];
};


export type ResourceItem = {
    id:string;
    title:string;
    url:string;
    completed?:boolean;
}