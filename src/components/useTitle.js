import {useEffect} from 'react'

function useTitle(props) {
    useEffect(()=>{
        document.title = props;
    });
}

export default useTitle;