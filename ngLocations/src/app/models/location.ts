export class Location {
  id: number;
  showTitle: string;
  nameInShow: string;
  location: string;
  city: string;
  state: string;
  comments: string;
  image: string;

  constructor(
    id: number = 0,
    showTitle: string = '',
    nameInShow: string = '',
    location: string = '',
    city: string = '',
    state: string = '',
    comments: string = '',
    image: string = ''
  ) {
    this.id = id;
    this.showTitle = showTitle;
    this.nameInShow = nameInShow;
    this.location = location;
    this.city = city;
    this.state = state;
    this.comments = comments;
    this.image = image;
  }
}
