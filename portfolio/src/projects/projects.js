function Projects() {

  return (
    <div className="Projects">
        <h2>Projects</h2>
        <div className="container">
          <h3>Mock Twitter Backend</h3>
            <dl>A Social Media API using Springboot which operated in a similar manner Twitter. Users were able to make posts, which would automatically be sent to lists based on who posted it, who they were mentioning in the post, and which hashtags they used. This made it easier for other users to search posts.</dl>
          <h3>PixelMaze</h3>
            <dl>A pacman like game made in Javascript. The game was made up an array of numbers, each number having different atributes. By pushing the keycode the number 0 would move along the array based on the direction given. This simulated movment that the player could use to get around and gain points. Gaining enough points allowed the user to put their name on the hall of fame.</dl>
          <h3>Dev Duel</h3>
            <dl>A game coded in JQuery which was connected through Github's API. Users were able to compare different developers by entering their usernames in one of two search bars. This pulled the user's object form the database and displayed their information. One of the two programmers were chosen as the winner based on followercount.</dl>
          <h3>AnimeFinder</h3>
            <dl>A tool coded in Javascript which was connected through MyAnimeList's API. Users were able to find a recommended show to watch by typing a genre they were intersted in the search bar. This caused the API to pull a list of 10 animes with that genre for them to watch. Clicking on the show's poster would cause the information of the show to be displayed.</dl>
        </div>
    </div>
  );
}

export default Projects;
