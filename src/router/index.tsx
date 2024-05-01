import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {Login, Register, Clients, Settings, Message, Home, Orders, Services} from "@pages"
import App from '../App'
import MainLayout from "@layout";

export default function Router(){
    const root = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home/*" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="clients" element={<Clients/>}/>
                    <Route path="settings" element={<Settings/>}/>
                    <Route path="message" element={<Message/>}/>
                    <Route path="orders" element={<Orders/>}/>
                    <Route path="services" element={<Services/>}/>
                </Route>
            </Route>
        )
    )

    return <RouterProvider router={root} />
}