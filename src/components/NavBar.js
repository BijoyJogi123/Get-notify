import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './userPhoto.jpg'
//ae7f78e7d8cf40cc97e3b8ef73a1c201

export default class NavBar extends Component {
  //making  a state that is used for mobile menu  funtionality
  
  constructor() {
    super();
    this.state = {
      navbar: false,
    }
  }

  render() {
    return (
      <>
        <div>
          <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

          <button type="button" onClick={() => this.setState({navbar:!(this.state.navbar)})}
                    className="inline-flex items-center justify-center rounded-md 
                                p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none 
                                focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    {(this.state.navbar) ? (
                      // {/* When Icon is Closed */}    



                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                    ) : (
                      // {/* When Icon is Open */}

                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>


                    )}
            </button>

                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                    <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">

                      <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</Link>


                      <Link to="/general" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">General</Link>

                      <Link to="/entertainment" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Entertainment</Link>

                      <Link to="/business" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Business</Link>

                      <Link to="/health" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Health</Link>

                      <Link to="/sports" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sports</Link>

                      <Link to="/science" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Science</Link>

                      <Link to="/technology" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Technology</Link>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    {/* <span className="sr-only">View notifications</span> */}

                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />

                    </svg>
                  </button>


                  <div className="relative ml-3">
                    <div>
                      <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={logo} alt="" />
                      </button>
                    </div>


                    {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
           
            <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
          </div> */}
                  </div>
                </div>
              </div>
            </div>


            <div className={` ${
                            this.state.navbar ? "block" : "hidden"
                        }`} id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3">

                <a to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                <Link to="/general" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">General</Link>

                <Link to="/entertainment" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Entertainment</Link>

                <Link to="/business" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Business</Link>

                <Link to="/health" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Health</Link>

                <Link to="/sports" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Sports</Link>

                <Link to="/science" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Science</Link>

                <Link to="/technology" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Technology</Link>
              </div>
            </div>
          </nav>

        </div>
        
      </>
    )
  }
};

