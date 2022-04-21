import { Injectable } from '@angular/core';
import {Book} from './book.model';
//import {Book} from './book.model‘;
@Injectable({
providedIn:'root'
})
export class BooksService {
private books: Book []=[
{
bid:'Hid1',
btitle: 'Marvel Haven',
imageUrl: 'https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg',
authors:['Santosh, K.C.','Gawali'],
stars:4,
room:'Deluxe',
address:'Las Vegas'
},
{
bid:'Hid2',
btitle: 'Imax Five Star',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:6,
room:'Normal',
address:'San Francisco'
},
{
bid:'Hid3',
btitle: 'Hollywood Hotel',
imageUrl: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:3,
room:'Super Deluxe',
address:'Los Angeles'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
{
bid:'Hid4',
btitle: 'Hevana Hotel',
imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
authors:['Santosh, K.C.','Gawali'],
stars:5,
room:'suite',
address:'new york'
},
];
constructor() {}
getAllBooks() {
return [...this.books];
}
getBook(bookId: string){
return {
...this.books.find(book=> {
return book.bid===bookId;
})
};
}

deleteBook(bookId: string){
  this.books=this.books.filter(book=>{
    return book.bid !== bookId;
  });
}

}
