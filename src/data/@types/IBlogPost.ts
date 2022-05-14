import React from "react";

export interface IBlogPost{
    id:string;
    title: string;
    description: string;
    picture:string;
    slug:string;
    content?: JSX.Element;
}