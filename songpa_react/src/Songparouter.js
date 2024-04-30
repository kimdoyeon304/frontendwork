import React from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


//a href
//react: link -> router -> 해당하는 패키지 include 포함한다
import App from "./App";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import Study2 from "./Study2";
import Ex4 from "./Ex4";

// import flexHomeindex from "./flexbox/Homeindex";

// import Homeindex from "./main/Homeindex";

// import Products from "./main/Products";

// import About from "./main/About";

// import NewsList from "./pages/NewHome";

// import Es1 from "./es6/es1";

// import Es2 from "./es6/es2";

// import Imp from "./es6/import";

// ​

// import Class1 from "./es6/class1";

// import Class2 from "./es6/class2";

// ​

// import ParentComponent from "./es6/ParentComponent";

// import Inputlogin from "./inputlogin/inputlogin";

// import Reduce from './reduce';

// import Kakaologin from './kakao/kakaologin';

// import Kakaoindex from './kakao/Kakaoindex';

// import Es3 from './es6/es3';

// import Es4 from './es6/es4';

// import Props1 from './es6/props1';

// import Props2 from './es6/props2';


const routeComponents = [

  { path: "/App", component: App },
  { path: "/Ex1", component: Ex1 },
  { path: "/Ex2", component: Ex2 },
  { path: "/Ex3", component: Ex3 },
  { path: "/Study2", component: Study2 },
  { path: "/Ex4", component: Ex4 }


//   { path: "/flexHomeindex", component: flexHomeindex },

//   { path: "/Homeindex", component: Homeindex },

//   { path: "/Products", component: Products },

//   { path: "/About", component: About },

//   { path: "/NewsList", component: NewsList },

//   { path: "/Es1", component: Es1 },

//   { path: "/Es2", component: Es2 },

//   { path: "/Imp", component: Imp },

// ​

//   { path: "/Class1", component: Class1 },

// ​

//   { path: "/Class2", component: Class2 },

// ​

//   { path: "/ParentComponent", component: ParentComponent },

//   { path: "/Inputlogin", component: Inputlogin },

//   { path: "/Reduces", component: Reduce },

//   { path: "/Kakoalogin", component: Kakaologin },

//   { path: "/Kakaoindex", component: Kakaoindex },

//   { path: "/Es3", component: Es3 },

//   { path: "/Es4", component: Es4 },

//   { path: "/Props1", component: Props1 },

//   { path: "/Props2", component: Props2 }

  

  

];

//router 18
function Appstart() {

  return (

    <Router>

      <nav>

        <ul>

          {routeComponents.map((route, index) => (

            <li key={index}>

              <Link to={route.path}>{route.path.replace("/", "")}</Link>

            </li>

          ))}

        </ul>

      </nav>

      <Routes>

        {routeComponents.map((route, index) => (

          <Route key={index} path={route.path} element={<route.component />} />

        ))}

      </Routes>

    </Router>

  );

}


export default Appstart;