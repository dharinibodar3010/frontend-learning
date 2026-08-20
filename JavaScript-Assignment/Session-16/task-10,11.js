/*Use find() to get first YouTube video having more than 1 million views.*/

const videos = [

    {
        title: "Java Tutorial",
        views: 500000
    },

    {
        title: "React Course",
        views: 2000000
    },

    {
        title: "Spring Boot",
        views: 3000000
    }

];


const popularVideo = videos.find(video => video.views > 1000000);


console.log(popularVideo);