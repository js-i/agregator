
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type UserId = string

export type User = {
    title: UserId,
    description: string,
    id: string,
}

export type UserState = {
    entities: Record<UserId, User>,
    ids: UserId[],
    selectedUserId: UserId | undefined,
}
 
export const initialUsersList: User[] = Array.from({length: 3000}, (_, index) => ({
    title: `title ${index +1}`,
    description: `description ${index +1}`,
    id: `id${index +1}`,
}))

const initialUsersState: UserState = {
    entities: {},
    ids: [],
    selectedUserId: undefined
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialUsersState,
    selectors: {
        selectSelectedUserId: (state) => state.selectedUserId,
        selectSortedUsers: createSelector(
            (state: UserState) => state.ids ?? [],
            (state: UserState) => state.entities ?? {},
            (_: UserState, sort: 'asc' | 'desc') => sort,
            (ids, entities, sort) => {
                return ids.map(id => entities[id]).sort((a, b) => {
                    return sort === 'asc'
                        ? a.title.localeCompare(b.title)
                        : b.title.localeCompare(a.title);
                });
            } 
        ),
    },
    reducers: {
        select: (state, action: PayloadAction<{ userId: UserId}>) => {
            state.selectedUserId = action.payload.userId
        },
        remove: (state) => {
            state.selectedUserId = undefined
        },
        store: (state, action: PayloadAction<{ users: User[]}>) => {
            const { users } = action.payload;
            state.entities = users.reduce((acc, user) => {
                acc[user.id] = user
                return acc
            }, {} as UserState['entities']);
            state.ids = users.map(user => user.id)
        }
    }
})


// export const selectSelectedUsers = (state: AppState) => {
    //     return state.users.selectedUserId 
    //     ? state.users.entities[state.users.selectedUserId].id
    //     : undefined
    // }

// export type UserSelectedAction = {
//     type: 'userSelected',
//     payload: {
//         userId: UserId
//     }
// }
// export type UserRemovedSelectedAction = {
//     type: 'userRemovedSelected'
// }

// export type UsersStoredAction = {
//     type: 'useStored',
//     payload: {
//         users: User[]
//     }
// }

// export type Action = UserSelectedAction | UserRemovedSelectedAction | UsersStoredAction;



// export const usersReducer = (state = initialUsersState, action: Action) => {
//     switch (action.type) {
//         case "useStored": {
//             const { users } = action.payload
//             return {
//                     ...state, 
//                     entities: users.reduce((acc, user) => {
//                         acc[user.id] = user
//                         return acc
//                     }, {} as UserState['entities']),
//                     ids: users.map(user => user.id)
//             }
//         }
//         case 'userSelected': {
//             const { userId } = action.payload
//             return {
//                 ...state,
//                 selectedUserId: userId
//             }
//         }
//         case 'userRemovedSelected': {
//             return {
//                 ...state,
//                 selectedUserId: undefined
//             }
//         }
//         default:
//             return state;
//     }
// }

// export const selectSortedUsers = createSelector(
//     (state: AppState) => state.users?.ids ?? [],
//     (state: AppState) => state.users.entities ?? {},
//     (_: AppState, sort: 'asc' | 'desc') => sort,
//     (ids, entities, sort) => {
//         return ids.map(id => entities[id]).sort((a, b) => {
//             return sort === 'asc'
//                 ? a.title.localeCompare(b.title)
//                 : b.title.localeCompare(a.title);
//         });
//     } 
// )

