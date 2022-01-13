const data = {
  movies: [
    {
      title: "the last jedi",
      year: "2005",
      description: "high in the halls of thek ings howr g oe",
      reviews: [
        { userID: 12345, review: "this is such an epic movie", rate: 9 },
      ],
      towatchCount: 10,
    },
  ],
  users: [
    {
      id: 1,
      name: "eslam khalaf",
      towatch: [{ id: 23232, title: "eerere", excitedRate: 4 }],
      reviews: [{ movieId: 1, name: "back to the future", rating: 5 }],
    },
  ],
};

/**
 * 1- user search for the movie by name it searches in our db if not found it will get the movie from the api
 * 2- by writing a review or add the movie to watch list it will be added to the our db
 * 3- users can view all local movies and there reviews
 * 4- the overall movie review is the average of the all reviews that it gets
 * 5- any user can search or view all users and see there reviews or thier watch list
 * 6- sure there will be auth in this app
 */
