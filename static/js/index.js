var profileDescription = document.getElementById("profile-description");
var profileImage = document.getElementById("profile-image");

$(document).on("click", "#mebtn", function(){
    console.log("me clicked");
    $("#page3").css("height", "750px");
    $("#page3").css("padding-top", "50px");
}); 

$(document).on("click", "#resbtn", function(){
    console.log("me clicked");
    $("#page4").css("height", "750px");
    $("#page4").css("padding-top", "50px");
}); 

// vue

let app = {};

// Given an empty app object, initializes it filling its attributes,
// creates a Vue instance, and then initializes the Vue instance.
let init = (app) => {

    // This is the Vue data.
    app.data = {
        posts: [], // See initialization.
    };

    app.index = (a) => {
        // Adds to the posts all the fields on which the UI relies.
       /* let i = 0;
        for (let p of a) {
            p._idx = i++;
            // TODO: Only make the user's own posts editable. //done in the edit function itself
            p.editable = true;
            p.edit = false;
            p.delete_check = false;
            p.is_pending = false;
            p.error = false;
            p.original_content = p.content; // Content before an edit.
            p.original_title = p.title;
            p.server_content = p.content; // Content on the server
            p.server_color = p.color;
            p.server_title = p.title;
        }
        return a;*/
    };

    app.go_deployed = (post_idx) => {
        window.open(app.vue.posts[post_idx].deployed);
    }

    app.go_src = (post_idx) => {
        window.open(app.vue.posts[post_idx].src_code);
    }


    // We form the dictionary of all methods, so we can assign them
    // to the Vue app in a single blow.
    app.methods = {
        go_deployed: app.go_deployed,
        go_src: app.go_src
    };


    // This creates the Vue instance.
    app.vue = new Vue({
        el: "#vue-target",
        data: app.data,
        methods: app.methods,
    });

    // And this initializes it.
    app.init = () => {
        // You should load the posts from the server.
        // This is purely debugging code.
        posts = [
            // This is a post.
            {
                id: 0,
                title: "NYT Book Search",
                authors: "Swechchha Parajuli",
                content: "A MERN app, that allows the user to search a book using author or name and save its information",
                deployed: "",
                src_code: "https://github.com/swechchhaparajuli/BookSearch",
                date_created: "",
                type: "bootcamp",
                portfolio:"webdev"
            },
            {
                id: 1,
                title: "Clicky Game",
                authors: "Swechchha Parajuli",
                content: "A Harry Potter themed game. Basically, just don't click on the same character twice!",
                deployed: "http://swechchha.com/clickyGame/",
                src_code: "https://github.com/swechchhaparajuli/clickyGame/",
                date_created: "",
                type: "bootcamp",
                portfolio:"webdev"
            }, 
            {
                id: 2,
                title: "Word Guess Game",
                authors: "Swechchha Parajuli",
                content: "Hangman game but like lion king themed, check it out!",
                deployed: "http://swechchha.com/Word-Guess-Game",
                src_code: "https://github.com/swechchhaparajuli/Word-Guess-Game/",
                date_created: "",
                type: "bootcamp",
                portfolio:"webdev"
            }, 
            {
                id: 3,
                title: "Sponsor A Child",
                authors: "Swechchha Parajuli",
                content: "",
                deployed: "http://swechchha.com/SponsorAChild/",
                src_code: "https://github.com/swechchhaparajuli/SponsorAChild/",
                date_created: "",
                type: "freelance work",
                portfolio:"project"
            },
            {
                id: 4,
                title: "Trivia Game",
                authors: "Swechchha Parajuli",
                content: "Find out how much you know about different environmental issues by playing this game!",
                deployed: "http://swechchha.com/TriviaGame",
                src_code: "https://github.com/swechchhaparajuli/TriviaGame/",
                date_created: "",
                type: "bootcamp",
                portfolio:"webdev"
            },
            {
                id: 5,
                title: "GifTastic",
                authors: "Swechchha Parajuli",
                content: "A Project on messing around with the giphy API, dynamic html etc (Harry Potter Themed)",
                deployed: "http://swechchha.com/GifTastic/",
                src_code: "https://github.com/swechchhaparajuli/GifTastic/",
                date_created: "",
                type: "bootcamp",
                portfolio:"webdev"
            },
            {
                id: 6,
                title: "bAmazon",
                authors: "Swechchha Parajuli",
                content: "Amazon, but not. A project on using sql database to make a buying/selling/storing items app",
                deployed: "",
                src_code: "https://github.com/swechchhaparajuli/bAmazon/",
                date_created: "",
                type: "bootcamp",
                portfolio:"webdev"
            },
            {
                id: 7,
                title: "Constructor Word Guess",
                authors: "Swechchha Parajuli",
                content: "A Project on messing around with constructors on js",
                deployed: "",
                src_code: "https://github.com/swechchhaparajuli/constructorWordGuess" ,
                date_created: "",
                type: "bootcamp",
                portfolio:"webdev"
            },
            {
                id: 8,
                title: "unTrending",
                authors: "Swechchha Parajuli",
                content: "unTrending is an application that gives its user access to news from a variety of outlets. ",
                deployed: "http://swechchha.com/unTrending/",
                src_code: "https://github.com/swechchhaparajuli/unTrending" ,
                date_created: "",
                type: "bootcamp",
                portfolio:"project"
            },
            {
                id: 9,
                title: "Night Crawler",
                authors: "Swechchha Parajuli",
                content: "mobile web-based app came out of the need to enable users to always have viable route options that ensure safety",
                deployed: "",
                src_code: "https://github.com/swechchhaparajuli/bcbc-project1" ,
                date_created: "",
                type: "bootcamp",
                portfolio:"project"
            },
            {
                id: 10,
                title: "uCare",
                authors: "Swechchha Parajuli",
                content: "A Project on messing around with constructors on js",
                deployed: "https://ucare2019.herokuapp.com/",
                src_code: "https://github.com/swechchhaparajuli/uCare" ,
                date_created: "",
                type: "bootcamp",
                portfolio:"project"
            },

            

        ];
        // TODO: Load the posts from the server instead.
        // We set the posts.

       /* axios.get(posts_url).then((result) => {
            console.log("recieved:", result.data);
            result_posts = result.data.posts;
            indexed_posts = app.index(result_posts);
            app.vue.posts = indexed_posts;

        }).catch((error) => {
            console.log(error);
        });*/
        app.vue.posts = posts;
    };

    // Call to the initializer.
    app.init();
};

// This takes the (empty) app object, and initializes it,
// putting all the code i
init(app);
