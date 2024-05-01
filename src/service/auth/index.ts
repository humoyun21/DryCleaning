import http from '../config'
import { saveCookie } from '@cocies'
import { Request } from '@authInterface';
import { toast } from 'react-toastify';

const authStore:Request = {
    login: async (payload) => {
        try {
          const response = await http.post("/auth/login", payload);
          if (response.status == 200) {
            saveCookie("token", response.data.access_token);
          }
          return response;
        } catch (err:any) {
          toast.error("Xatolik yuz berdi")
        }
    },
    register: async(payload) => {
        try {
          const response = await http.post("/auth/register", payload);
          return response
        } catch (err:any) {
            toast.error("Bunday Emaildan oldin royhatdan otilgan!", {autoClose: 1200})
        }
    },
    forgotPassword: async(payload) => {
        try{
            const response = await http.post("/auth/forgot-password", payload);
            return response;
        }catch (err:any) {
            toast.error("Xatolik yuz berdi")
          }
    },
    refreshToken: async(payload) => {
        try{
            const response = await http.post("/auth/refresh-token", payload);
            return response;
        }catch (err:any) {
            toast.error("Xatolik yuz berdi")
          }
    },
    updatePassword: async(payload) => {
        try{
            const response = await http.post("/auth/update-password", payload);
            return response;
        }catch (err:any) {
            toast.error("Xatolik yuz berdi")
          }
    },
    verify: async(payload) => {
        try{
            const response = await http.post("/auth/verify", payload);
            return response;
        }catch (err:any) {
            toast.error("Xatolik yuz berdi")
          }
    },
    verifyForgotPassword: async(payload) => {
        try{
            const response = await http.post("/auth/verify-forgot-password", payload);
            return response;
        }catch (err:any) {
            toast.error("Xatolik yuz berdi")
          }
    },
};




export default authStore;


