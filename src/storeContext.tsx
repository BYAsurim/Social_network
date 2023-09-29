import React from 'react'
import store, {AppStore} from "./redax/redux-store";

export type ProviderType = {
    store: AppStore
    children: React.ReactNode
}

const StoreContext = React.createContext({} as AppStore)

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={store} >
        {props.children}
        </StoreContext.Provider>

}

export default StoreContext