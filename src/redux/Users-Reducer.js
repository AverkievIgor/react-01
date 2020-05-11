const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';


let initialState = {
    users:[/*
        {id: 1, photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: false, fullName: 'Bug', status: '3a_nuBoM', location: {city: 'Zelenograg', country:'Russia'}},
        {id: 2, photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: false,fullName: 'Jam', status: 'KoToPbIu`', location: {city: 'Bankok', country:'Tailand'}},
        {id: 3, photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: true, fullName: 'Fill', status: 'with family', location: {city: 'Paris', country:'Peru'}},
        {id: 4, photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: true, fullName: 'Snymric', status: 'at work is design', location: {city: 'Praga', country:'Poland'}},
        {id: 5, photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: false, fullName: 'Snoop', status: 'арбайтон', location: {city: 'Boston', country:'USA'}},
        {id: 6, photoUrl:'https://avatars.mds.yandex.net/get-pdb/1221986/7f52a674-7f47-4001-b644-4e8b9494d379/s1200?webp=false',
            followed: true, fullName: 'Stamiho', status: 'Loop', location: {city: 'Masugino', country:'Russia'}}
    */],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
};

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                //users:[...state.users],
                users: state.users.map( u => {
                    if(u.id===action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return  {
            ...state,
            users: state.users.map( u => {
                if(u.id===action.userId){
                    return {...u, followed: false}
                }
                return u;
            })
        }
        case SET_USERS: {
                /*return{...state, users: [...state.users, ...action.users]}*/
            return{...state, users: action.users}
            }
        case SET_CURRENT_PAGE: {
            return{...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return{...state, totalUserCount: action.totalCount}
        }
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, totalCount: totalUsersCount})

export default UsersReducer;