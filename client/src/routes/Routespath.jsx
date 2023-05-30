import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Roots from '../components/Roots'
import Spinner from "../utils/Spiner";
import Account from "../pages/Account"
import Checkout from "../pages/Checkout"
import Privateroutes from "./Privateroutes";
import Checkoutdetails from "../pages/Checkoutdetails";
import Products from '../pages/Products'
import Customer from '../pages/Customer'
import Order from '../pages/Order'
import Ordrerdetail from "../pages/Ordrerdetail";
const SearchResult = lazy(() => import("../SearchResult"));
const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));


const routes = [
  {
    path: "/",
    element: <Roots/>,
    children: [
      {
        path: '/',
        element: (
          <React.Suspense fallback={<Spinner/>}>
            <Home/>
          </React.Suspense>
        )
      },
      {
        path: 'product/category/:name',
        element: (
          <React.Suspense fallback={<Spinner/>}>
            <Products/>
          </React.Suspense>
        )
      },
      {
        path: 'product/:slug',
        element: (
          <React.Suspense fallback={<Spinner/>}>
            <ProductDetail/>
          </React.Suspense>
        )
      },
      {
        path: 'account',
        element: <Account/>
      },
      {
        path: 'search',
        element: (
          <React.Suspense fallback={<Spinner/>}>
            <SearchResult/>
          </React.Suspense>
        )
      },
      {
        path: 'checkout',
        element: (
          <Privateroutes>
            <Checkout/>
          </Privateroutes>
        ),
        children: [
          {
            path: 'checkoutdetails',
            element: (
              <Privateroutes>
                <Checkoutdetails/>
              </Privateroutes>
            ),
          }
        ]
      },
      {
        path: 'customer',
        element: (
          <Privateroutes>
            <Customer />
          </Privateroutes>
        ),
        children: [
          {
            path: 'orders',
            element: (
              <React.Suspense fallback={<Spinner />}>
                <Privateroutes>
                  <Order />
                </Privateroutes>
              </React.Suspense>
            ),
            children: [
              {
                path: ':id',
                element: (
                  <React.Suspense fallback={<Spinner />}>
                    <Privateroutes>
                      <Ordrerdetail />
                    </Privateroutes>
                  </React.Suspense>
                ),
              },
            ],
          },
        ]
      } 
    ]
  },
];

export default function Routespath() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router = {router} />;
}