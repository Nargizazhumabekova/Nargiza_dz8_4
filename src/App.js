import PokemonPage from './page/pokemonPage/PokemonPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountPage from './page/countPage/CountPage';
import Users from './page/user/User';
import FormPage from './page/FormPage/FormPage';
import UserInfo from './page/UserInfo/UserInfo';
import PokemonInfoPage from './page/pokemonInfoPage/PokemonInfoPage';
import React from "react";




function App() {


    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<PokemonPage/>}/>
                <Route path='/count' element={<CountPage/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/form' element={<FormPage/>}/>
                <Route path='/users/:id' element={<UserInfo/>}/>
                <Route path='/pokemon/:id' element={<PokemonInfoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}


export default App;





// const sum = (a,b) => a+b
//
// sum(5,9)

// const user = {
//     name: 'Bakyt',
//     age: 18
// }
//
// user.name

