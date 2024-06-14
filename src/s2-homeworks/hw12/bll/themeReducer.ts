const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionChangeThemeIdType): StateRootType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any

type ActionChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

export type StateRootType = typeof initState

