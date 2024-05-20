import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType):UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state.sort((a,b) => {
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()
                if (nameA < nameB && action.payload === 'up') return -1
                if (nameA > nameB && action.payload === 'up') return 1
                if (nameA > nameB && action.payload === 'down') return -1
                if (nameA < nameB && action.payload === 'down') return 1
                return 0
            })]
            
        }
        case 'check': {

            return state.filter(i => i.age >= 18).sort((a, b) => a._id - b._id)
        }
        default:
            return state
    }
}
