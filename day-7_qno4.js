var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
  for (let index = 0; index < library.length; index++) {
      const element = library[index];
      console.log(element.title);
      console.log(element.author);
      console.log(element.readingStatus);
      
  }