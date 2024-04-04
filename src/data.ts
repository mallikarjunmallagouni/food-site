import {Food} from './app/shared/models/food'
import { Tag } from './app/shared/models/tag'


export const sample_foods:Food[]= [
{
    id:1,
    name:"soup",
    price:70,
    cookTime: '10-30',
    favorite: false,
    stars:4.2,
    origins:['india','asia'],
    imageUrl:'assets/bowl-of-ice-cream-with-chocolate-819x1024.webp',
    tags:['SlowFood','Soup']
},
{
    id:2,
    name:"Fry",
    price:140,
    cookTime: '20-25',
    favorite: false,
    stars:3.8,
    origins:['india','asia'],
    imageUrl:'assets/cheeseburger.webp',
    tags:['SlowFood','Soup']
},
{
    id:3,
    name:"Hamburger",
    price:240,
    cookTime: '11-15',
    favorite: false,
    stars:3.9,
    origins:['india','asia'],
    imageUrl:'assets/crispy-spicy-chicken-wings.webp',
    tags:['SlowFood','Soup']
},
{
    id:4,
    name:"slowFood",
    price:50,
    cookTime: '16-18',
    favorite: false,
    stars:3.6,
    origins:['india','asia'],
    imageUrl:'assets/boiled-eggs-on-a-plate-768x768.webp',
    tags:['SlowFood','Soup']
},
{
    id:5,
    name:"pizza",
    price:300,
    cookTime: '20-30',
    favorite: false,
    stars:4.5,
    origins:['india','asia'],
    imageUrl:'assets/pouring-honey-on-pancakes-768x768.webp',
    tags:['SlowFood','Soup']
},
{
    id:6,
    name:"FastFoodh",
    price:30,
    cookTime: '10-25',
    favorite: false,
    stars:4.8,
    origins:['india','asia'],
    imageUrl:'assets/strawberry-milk-splash.webp',
    tags:['SlowFood','Soup']
}
]

export const sample_tags:Tag[] = [
    {name:'All', count:6},
    {name:'FastFood',count:3},
    {name:'pizza',count:3},
    {name:'slowFood',count:2},
    {name:'Hamburger', count:1},
    {name:'Fry',count:1},
    {name:'soup', count:4}
]