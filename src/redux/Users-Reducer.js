const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


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
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }

}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, totalCount: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export default UsersReducer;