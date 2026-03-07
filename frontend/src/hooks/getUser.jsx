import { useEffect } from 'react'
import { serverUrl} from "../App.jsx";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData,setAuthLoading } from '../redux/user.js';

export default function useGetUser() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/user/current-user`, { withCredentials: true });
                dispatch(setUserData(result.data));
                console.log(result);
            } catch (error) {
                console.log(error);
            }finally{
                dispatch(setAuthLoading(false));
            }
        }
        fetchUser();
    })
}
