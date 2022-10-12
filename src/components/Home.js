import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UpcomingEvents from './UpcomingEvents';
import CustomLink from './CustomLink';

const Home = () => {
    return (
        <div className='mt-5'>
            <div className="container">

                {/* header */}
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className='text-white'>Events</h2>
                    </div>
                    <div className="col-lg-6 text-end">
                        <button className='btn btn-outline-danger'>+ Create Events</button>
                    </div>
                </div>

                {/* navigation bar */}
                <nav class="nav ms-0 ps-0 border-bottom border-light border-opacity-50">
                    <CustomLink className='nav-link ps-0 text-white' to="/upcoming" >Upcomming </CustomLink>
                    <CustomLink className='nav-link ps-0 text-white' to="/past" >Past </CustomLink>
                </nav>

                <Outlet />







            </div>
        </div>
    );
};

export default Home;