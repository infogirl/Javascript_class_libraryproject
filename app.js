class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut === false) {
      return (this._isCheckedOut = true);
    } else {
      return (this._isCheckedOut = false);
    }
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    const lengthOfArray = this._ratings.length;
    return ratingsSum / lengthOfArray;
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }

  set isCheckedOut(status) {
    if (typeof status === "boolean") {
      this._isCheckedOut = status;
    } else {
      return "Please put in a true/false answer";
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, runTime, director) {
    super(title);
    this._runTime = runTime;
    this._director = director;
  }

  get runTime() {
    return this._runTime;
  }

  get director() {
    return this._director;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

historyOfEverything.toggleCheckOutStatus();

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);

const speed = new Movie("Speed", 116, "Jan de Bont");
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
