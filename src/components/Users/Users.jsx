import React from "react";
import style from './Users.modudule.css'

let Users = (props) =>{
    if(props.users.length===0){
    props.setUsers([
        {id: 1,
            photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: false,
            fullName: 'Bug',
            status: '3a_nuBoM',
            location: {city: 'Zelenograg', country:'Russia'}},
        {id: 2,
            photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: false,
            fullName: 'Jam',
            status: 'KoToPbIu`',
            location: {city: 'Bankok', country:'Tailand'}},
        {id: 3,
            photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: true,
            fullName: 'Fill',
            status: 'with family',
            location: {city: 'Paris', country:'Peru'}},
        {id: 4,
            photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: true,
            fullName: 'Snymric',
            status: 'at work is design',
            location: {city: 'Praga', country:'Poland'}},
        {id: 5,
            photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: false,
            fullName: 'Snoop',
            status: 'арбайтон',
            location: {city: 'Boston', country:'USA'}},
        {id: 6, photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: true,
            fullName: 'Stamiho',
            status: 'Loop',
            location: {city: 'Masugino', country:'Russia'}}
    ])
    }

    return  <div>{
        props.users.map( u => <div key={u.id}>
            <span>
                <div><img src={u.photoUrl} className={style.usersPhoto} /></div>
                <div>
                    {u.followed
                    ? <button onClick={()=>{
                        props.follow(u.id)
                    }}>Follow</button>
                    : <button onClick={()=>{
                        props.unfollow(u.id)
                    }}>Unfollow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
    }</div>
}
export default Users;