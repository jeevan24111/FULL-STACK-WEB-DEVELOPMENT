export default async function generateProfile(){
        let data=await fetch("https://api.github.com/search/users?q=octocat&per_page=50");
        let result=await data.json();
        setProfile(result.items ?? []);

        // let res=await data.json();
        // setProfile(res);
      }

// export default generateProfile;