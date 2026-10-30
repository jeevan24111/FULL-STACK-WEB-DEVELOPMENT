import React ,{useState,useEffect,useCallback}from "react";
import ReactDOM from "react-dom/client";
import generateProfile from "./components/generateProfile";
function Githubprofileviwer(){

    let [profile,setProfile]=useState([]);
    let [count,SetCOunt]=useState(30);

    async function generateProfile(){
        let data=await fetch("https://api.github.com/search/users?q=octocat&per_page=50");
        let result=await data.json();
        setProfile(result.items ?? []);

        // let res=await data.json();
        // setProfile(res);
      }
    
      useEffect(()=>{
        generateProfile();
      },[]);
        return(
            <>
              <div className="heading">
                <h1>GITHUB PROFILE VIEWER</h1>
              </div>
              <div className="search">
                <input type="text" placeholder="type here"></input>
                <button>SEARCH</button>
              </div>
              <div className="card">
                {
                    profile.map((value)=>{
                        return(
                            <div key={value.id} className="ind">
                                <img src={value.avatar_url} height={150} width={150}></img>
                                <h1>{value.login}</h1>
                                <a href={value.html_url}>PROFILE</a>
                            </div>
                        )
                    })
                }
              </div>
            </>
        );
}

const ele=ReactDOM.createRoot(document.getElementById('root'));
ele.render(<Githubprofileviwer/>);