import {create} from "zustand";
import {authApi} from "../services/api.js";

const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,

    init: async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            set({loading: false});
        }

        authApi.verify()
            .then((res) => {
                console.log(res);
                set({user: res.user, loading: false});
            })
            .catch((err) => {
                console.log(err);
                localStorage.removeItem("token")
                set({error: err, loading: false});
                throw new Error(err.message);
            });
    },

    login: async (email, password) => {
        set({error: null});
        try {
            const data = await authApi.login(email, password);
            localStorage.setItem('token', data.token);
            set({user: data.user});
        } catch(err) {
            set({error: err});
            throw new Error(err.message);
        }
    },

    register: async (email, password, name) => {
        set({error: null});
        try {
            const data = await authApi.register(email, password, name);
            localStorage.setItem('token', data.token);
            set({user: data.user});
        } catch(err) {
            set({error: err})
        }
    },

    logout: async () => {
        set({error: null, user: null});
        localStorage.removeItem('token');
    }

}));

export default useAuthStore;
