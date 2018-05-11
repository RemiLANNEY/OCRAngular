import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  articles = [
    {
      title : "Mon premier Post",
  	  content:"Morbi est velit, vestibulum eget dignissim sit amet, egestas commodo lectus. Nam imperdiet venenatis nunc at facilisis. Mauris a tempus risus, vel euismod eros. Cras mauris odio, lacinia eu massa non, iaculis elementum sem. Aenean porta felis vitae urna semper lacinia. Praesent eu elementum nunc. Duis interdum imperdiet ipsum quis suscipit. Nam aliquam augue posuere enim vulputate, vulputate vehicula justo imperdiet. Etiam bibendum euismod sem vitae ornare. Fusce eget luctus dolor, in semper lacus. Vestibulum quis tempus ipsum. Sed volutpat imperdiet velit, in gravida purus maximus sed. Maecenas congue, ex vel aliquam tempus, est libero scelerisque elit, ut pharetra justo metus sed massa. Pellentesque imperdiet elementum mauris quis rhoncus.",
  	  loveIts: 2,
  	  created_at: new Date();
    },
    {
      title: "Mon second Post",
  	  content: "Suspendisse dignissim volutpat sem et aliquet. Nam suscipit nec turpis ut aliquet. Donec efficitur dictum dui eget tincidunt. Suspendisse id lacus accumsan, commodo arcu vel, ultrices orci. Morbi eget euismod magna, sed varius turpis. Pellentesque ornare ex eget bibendum congue. Cras eu sem a nulla aliquet suscipit sit amet quis odio. Pellentesque eget elementum libero. Cras nec iaculis dolor. Morbi convallis euismod velit vitae lobortis. Proin molestie in lorem ut porttitor. Cras porttitor tincidunt tellus. Sed tempus velit ut tincidunt gravida. Duis sed dignissim nisl. Proin imperdiet lorem mauris. Donec quis ligula sodales, fermentum sem vitae, aliquam erat.",
  	  loveIts: -2,
  	  created_at: new Date();
    },
    {
      title: "un autre Post",
  	  content: "Sed ipsum ligula, imperdiet eu lacus lacinia, ultrices ornare ex. Donec ac ligula ac ex rutrum pellentesque. Ut tincidunt blandit bibendum. Vivamus velit quam, tincidunt nec purus convallis, elementum viverra justo. Phasellus tellus elit, eleifend sed nibh a, lacinia condimentum enim. Phasellus pellentesque ante et bibendum consequat. Proin sed maximus justo. Cras pellentesque sed risus non sodales. Suspendisse vel eros ac enim ultricies imperdiet.",
  	  loveIts: 0,
  	  created_at: new Date();
    }
  ];
}
