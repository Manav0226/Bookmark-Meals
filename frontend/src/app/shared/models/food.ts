export class Food{
    id!:string;
    price!:number;
    name!:string;
    favorite:boolean=false;
    stars!:number;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
}
