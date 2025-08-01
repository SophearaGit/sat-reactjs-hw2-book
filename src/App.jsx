import React from 'react'
import 'flowbite';
import { faker } from '@faker-js/faker';
import { IoIosArrowDown } from "react-icons/io";
import { FaCartPlus, FaStar, FaSortAlphaDownAlt, FaFilter, FaEye, FaRegHeart } from "react-icons/fa";
import { CiBadgeDollar, CiDeliveryTruck } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";

function App() {

  const BookImageAdress = [
    {
      id: 1,
      image_address: "https://i.pinimg.com/1200x/83/39/75/833975049bbfcdab9c65a02cbac011ea.jpg"
    },
    {
      id: 2,
      image_address: "https://i.pinimg.com/1200x/8e/4a/3e/8e4a3ec21da25c06f1ded1ff1749403d.jpg"
    },
    {
      id: 3,
      image_address: "https://i.pinimg.com/1200x/9f/91/ca/9f91cacccd9c01d58e0c306fc669e4e2.jpg"
    },
    {
      id: 4,
      image_address: "https://i.pinimg.com/736x/c5/f6/f2/c5f6f2434376101b900d346599d22fa7.jpg"
    }
    , {
      id: 5,
      image_address: "https://i.pinimg.com/1200x/ee/54/f3/ee54f3b176740cefec257e8081c013f0.jpg"
    },
    {
      id: 6,
      image_address: "https://i.pinimg.com/736x/29/1f/9d/291f9d7d3670d47e05f2f3378e810f0a.jpg"
    },
    {
      id: 7,
      image_address: "https://i.pinimg.com/1200x/54/81/04/548104012c2dcae4efa45bb96a9da6e8.jpg"
    },
    {
      id: 8,
      image_address: "https://i.pinimg.com/1200x/0d/9d/e4/0d9de459e7861cc86982397125a160ac.jpg"
    }
  ]

  const books = Array.from({ length: 8 }, () => ({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    author: faker.person.fullName(),
    price: faker.commerce.price(),
    discount: faker.number.int({ min: 0, max: 50 }),
    rating: faker.number.int({ min: 1, max: 5 }),
    picture: BookImageAdress[Math.floor(Math.random() * BookImageAdress.length)].image_address,
  }));

  return (
    <>
      <header>
        <nav className="bg-white dark:bg-gray-800 antialiased">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="shrink-0">
                  <a href="#" title="">
                    <img className="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="Logo Light" />
                    <img className="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="Logo Dark" />
                  </a>
                </div>
                <ul className="hidden lg:flex items-center ga</a>p-6 md:gap-8 py-3">
                  <li><a href="#" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Home</a></li>
                  <li><a href="#" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Best Sellers</a></li>
                  <li><a href="#" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Blogs</a></li>
                  <li><a href="#" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">About Us</a></li>
                  <li><a href="#" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Contact Us</a></li>
                </ul>
              </div>
              <div className="flex items-center lg:space-x-2">
                <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" className="inline-flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium text-gray-900 dark:text-white">
                  <LuShoppingCart className="w-5 h-5 me-1" />&nbsp;
                  <span className="hidden sm:flex">My Cart</span>
                  <IoIosArrowDown className="w-4 h-4 ms-1" />
                </button>
                <div id="myCartDropdown1" className="hidden z-10 max-w-sm p-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Your cart is empty.</p>
                </div>
                <button id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium text-gray-900 dark:text-white">
                  <VscAccount className="w-5 h-5 me-1" />&nbsp;
                  <span className="hidden sm:flex">Seth Sopheara</span>
                  <IoIosArrowDown className="w-4 h-4 ms-1" />
                </button>
                <div id="userDropdown1" className="hidden z-10 w-56 bg-white rounded-lg shadow dark:bg-gray-700">
                  <ul className="p-2 text-sm font-medium text-gray-900 dark:text-white space-y-1">
                    <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">My Account</a></li>
                    <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">Orders</a></li>
                    <li><a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">Sign Out</a></li>
                  </ul>
                </div>
                <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" className="inline-flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white lg:hidden">
                  <span className="sr-only">Open Menu</span>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                  </svg>
                </button>
              </div>
            </div>

            <div id="ecommerce-navbar-menu-1" className="hidden mt-4 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <ul className="space-y-3 text-sm font-medium text-gray-900 dark:text-white">
                <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Home</a></li>
                <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Best Sellers</a></li>
                <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Gift Ideas</a></li>
                <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Games</a></li>
                <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Electronics</a></li>
                <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Home & Garden</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="bg-[#121726]">
        {/* HERO SECTION START*/}
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:pt-16">
          <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
            <div className="content-center justify-self-start md:col-span-7 md:text-start">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">Limited Time Offer!<br />Up to 90% OFF!</h1>
              <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg lg:mb-5 lg:text-xl">Don't Wait - Be my girlfriend now!</p>
              <a href="#" className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Shop Now</a>
            </div>
            <div className="hidden md:col-span-5 md:mt-0 md:flex">
              <img className="dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg" alt="shopping illustration" />
              <img className="hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg" alt="shopping illustration" />
            </div>
          </div>
        </section>
        {/* HERO SECTION END*/}
        {/* BOOKS SECTION START*/}
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
              <div>
                <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                  Explore our books
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Discover a wide range of books across various genres and topics.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
                  <FaFilter className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" />
                  Filters
                  <IoIosArrowDown className='-me-0.5 ms-2 h-4 w-4' />
                </button>
                <button id="sortDropdownButton1" data-dropdown-toggle="dropdownSort1" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
                  <FaSortAlphaDownAlt className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" />
                  Sort
                  <IoIosArrowDown className='-me-0.5 ms-2 h-4 w-4' />
                </button>
                <div id="dropdownSort1" className="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom">
                  <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="sortDropdownButton">
                    <li>
                      <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> The most popular </a>
                    </li>
                    <li>
                      <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Newest </a>
                    </li>
                    <li>
                      <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Increasing price </a>
                    </li>
                    <li>
                      <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Decreasing price </a>
                    </li>
                    <li>
                      <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> No. reviews </a>
                    </li>
                    <li>
                      <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Discount % </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {books.map((book, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="#">
                      <img className="mx-auto h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
                      <img className="mx-auto hidden h-full dark:block" src={book.picture} alt="" />
                    </a>
                  </div>
                  <div className="pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> Up to {book.discount}% off </span>

                      <div className="flex items-center justify-end gap-1">
                        <button type="button" data-tooltip-target="tooltip-quick-look" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <span className="sr-only"> Quick look </span>
                          <FaEye className="h-5 w-5" aria-hidden="true" />

                        </button>
                        <div id="tooltip-quick-look" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                          Quick look
                          <div className="tooltip-arrow" data-popper-arrow=""></div>
                        </div>

                        <button type="button" data-tooltip-target="tooltip-add-to-favorites" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <span className="sr-only"> Add to Favorites </span>
                          <FaRegHeart className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <div id="tooltip-add-to-favorites" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                          Add to favorites
                          <div className="tooltip-arrow" data-popper-arrow=""></div>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                      {book.title}
                    </a>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar key={i} className={`${i < book.rating ? "text-yellow-400" : "text-gray-400"} h-4 w-4`} />
                        ))}
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {book.rating}.0
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(455)</p>
                    </div>
                    <ul className="mt-2 flex items-center gap-4">
                      <li className="flex items-center gap-2">
                        <CiDeliveryTruck className='w-5 h-5 text-sm font-extrabold text-gray-500 dark:text-gray-400' />
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
                      </li>
                      <li className="flex items-center gap-2">
                        <CiBadgeDollar className='w-5 h-5 text-sm font-extrabold text-gray-500 dark:text-gray-400'></CiBadgeDollar>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">${book.price}</p>
                      <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <FaCartPlus />&nbsp;
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full text-center">
              <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
            </div>
          </div>
        </section>
        {/* BOOKS SECTION END*/}
      </main>

      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App