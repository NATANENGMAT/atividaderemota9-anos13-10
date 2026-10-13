import React from 'react';
import {createRoot} from 'react-dom/client';
import Home from './App';
import Teacher from './Teacher';
import './style.css';
createRoot(document.getElementById('root')!).render(new URLSearchParams(location.search).has('professor')?<Teacher/>:<Home/>);
