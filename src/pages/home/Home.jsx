import { Layout } from 'antd'
import React from 'react'
import { Header } from '../../components/header/Header'
import { ContentHome } from '../../components/content/ContentHome'
import { Route, Routes } from 'react-router-dom'
import { Movies } from '../Movies/Movies'


export const Home = () => {
    return (
        <>
                <Layout>
                    <header>
                        <Header />
                    </header>
                        <Routes>
                            <Route path="/" element={<ContentHome />}/>
                            <Route path="/Movies" element={<Movies />}/>  
                        </Routes>
                </Layout>

        </>
    )
}