'use client'
import {User,} from '@/app/components/modules/users/users.slice'
import { useAppDispatch, useAppSelector } from "../../../lib/store"
import { memo, useState } from "react"
import { UserId, usersSlice } from './users.slice'

export default function UsersList() {
    console.log('render user list')
    const [sortType, setSortType] = useState<'asc' | 'desc'>('asc')
    
    const selectUserId = useAppSelector((state) => usersSlice.selectors.selectSelectedUserId(state))
    const sortedUsers = useAppSelector((state) => usersSlice.selectors.selectSortedUsers(state, sortType))
    
    return (
        <div className="flex flex-col items-center">
        {!selectUserId ? (
            <div className="flex flex-col items-center">
                <div className="flex gap-3  mb-4">
                    <button className="bg-blue-400 p-3 hover:outline " onClick={() => setSortType('asc')}>sort asc</button>
                    <button className="bg-blue-400 p-3 hover:outline" onClick={() => setSortType('desc')}>sort asc</button>
                </div>    
                <ul>
                    {sortedUsers && sortedUsers.map((user: User) => <UserListItem key={user.id} userId={user.id}/>)}
                </ul>
            </div>
        ) : (
            <div>
                <SelectedItem userId={selectUserId}/>
            </div>
        )}
         </div>
    )
}

const UserListItem = memo(function UserListItem({userId} : { userId: UserId}) {
    const user = useAppSelector((state) => state.users.entities[userId])
    const dispatch = useAppDispatch()
    if (!user) return null; 
    const handleClick = () => {
        dispatch(usersSlice.actions.select({ userId }))
    }
    return (
        <li 
            onClick={handleClick}
            className="hover:underline cursor-pointer border px-3"
            >    
            <h2>{user.title}</h2>
            <p>{user.description}</p>
        </li>
    )
})

function SelectedItem({userId} : { userId: UserId}) {
    const user = useAppSelector((state) => state.users.entities[userId])
    const dispatch = useAppDispatch()
    if (!user) return null; 
    const handleClick = () => {
        dispatch(usersSlice.actions.remove())
    }
    return (
        <div 
            onClick={handleClick}
            className="hover:underline cursor-pointer border px-3"
            >
            <p>selected item - delete?</p>
            <h2>{user.title}</h2>
            <p>{user.description}</p>
        </div>
    )
}