import Counter from '@/app/components/modules/counters/counters'
import UsersList from '../components/modules/users/users-list'

export default function CounterPage() {
   return <div>
      <Counter counterId='first'/>
      <UsersList/>
      </div>
}