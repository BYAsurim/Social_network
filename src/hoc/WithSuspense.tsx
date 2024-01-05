import React, {ComponentType, Suspense} from 'react';
import Preloader from "../components/common/preloader/Preloader";


export function WithSuspense<T>(Component: ComponentType<T>) {
    return (Props: T) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...Props as T} />
        </Suspense>
    }
}




