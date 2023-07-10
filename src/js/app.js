import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://t4.ftcdn.net/jpg/01/26/60/17/360_F_126601722_dLhuMAlekhhZoWHBknasvOYzgcJjz7YT.jpg", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://us.123rf.com/450wm/ajiwaluyo/ajiwaluyo2208/ajiwaluyo220800264/190008066-panda-sitting-excited-cute-creative-kawaii-cartoon-mascot-logo.jpg?ver=6", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name ? variables.name : "First Name"} ${
    variables.lastname ? variables.lastname : "Last Name"
  }</h1>
                  <h2> ${variables.role ? variables.role : "Web Developer"}</h2>
                  <h3> ${
                    variables.city ? variables.city : "St. Petersburg, Fl"
                  }, ${variables.country ? variables.country : "USA"}</h3>
            
            <ul class="position-left">
              <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
              <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
              <li><a href="https://linkedin.com/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
            </ul>
            
            <ul class="position-right">
                <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
                <li><a href="https://linkedin.com/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
            </ul>
              
        
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://t4.ftcdn.net/jpg/01/26/60/17/360_F_126601722_dLhuMAlekhhZoWHBknasvOYzgcJjz7YT.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://us.123rf.com/450wm/ajiwaluyo/ajiwaluyo2208/ajiwaluyo220800264/190008066-panda-sitting-excited-cute-creative-kawaii-cartoon-mascot-logo.jpg?ver=6",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
