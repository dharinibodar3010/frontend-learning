/*Build a Promise called getFollowersCount that resolves after 1 second with random followers 
between 1000 and 5000.*/

const getFollowersCount = new Promise((resolve,reject)=>{


    setTimeout(()=>{

        let followers = Math.floor(Math.random() * 4000) + 1000;

        resolve(followers);

    },1000);


});


getFollowersCount.then((count)=>{

    console.log(`You have ${count} new followers`);

});