export class foods{
    id!: string;
    name!: string;
    cookTime!: string;
    favorite: boolean = false;
    origins!:string[];
    price!: number;
    star: number = 0;
    imageUrl!:string;
    tags?:string[];
}