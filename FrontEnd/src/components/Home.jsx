import React, { Fragment } from "react";
import '../styles/home.css';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import bannerimg from '../imgs/bannerimg.png';
import searchcategoryicon from '../imgs/searchcategoryicon.png';
import threedicon from '../imgs/3dimg.png';
import lotteicon from '../imgs/lotteicon.png';
import vectoricon from '../imgs/vectoricon.png';
import freeasseticon from '../imgs/freeasssetsicon.png';


export function Home() {


    
    return <Fragment>
        
<div className="homebanner">
<Navbar></Navbar>

<div className="homebanner-content">
    <div className="homebanner-left">
        <div className="homebannerleft-inner">
        <h2><span style={{ color:'#F48B3C'}}>iCon</span><span style={{ color:'#449AF7'}}>Wala</span></h2>
        <p className="homebannertext">Dive into a World of <br />
        Customizable Design Assets</p>

        <div className="homebannersearch-div">
            <p>Over 10,000+ new assets added every day. Integrated plugins, tools, editors, and more.</p>
            <div className="searchdiv">
            <input type="text" placeholder="Search from 1000s of Design Assets"/>
            <svg version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path transform="translate(213.43 47.797)" d="m0 0c0.78081-0.007105 1.5616-0.01421 2.3661-0.02153 32.652-0.22969 32.652-0.22969 46.208 3.2247 0.91282 0.22575 1.8256 0.45149 2.7661 0.68408 31.64 8.0198 58.581 22.92 82.234 45.316 0.89332 0.84047 1.7866 1.6809 2.707 2.5469 28.451 27.535 49.4 69.497 50.454 109.55 0.019503 1.4435 0.033274 2.8872 0.041992 4.3308 0.007105 0.78081 0.01421 1.5616 0.02153 2.3661 0.22969 32.652 0.22969 32.652-3.2247 46.208-0.22575 0.91282-0.45149 1.8256-0.68408 2.7661-6.0241 23.766-15.778 45.301-30.589 64.867-1.7361 2.3803-3.2269 4.8334-4.7266 7.3672 0.60114 0.5993 1.2023 1.1986 1.8216 1.8161 14.619 14.575 29.232 29.155 43.839 43.741 7.064 7.0537 14.13 14.106 21.2 21.153 6.1616 6.1417 12.32 12.287 18.474 18.436 3.2593 3.2567 6.5204 6.5116 9.7856 9.7624 3.0724 3.0588 6.1401 6.1223 9.2042 9.1894 1.1262 1.1256 2.2541 2.2496 3.3839 3.3717 1.541 1.5311 3.0757 3.0682 4.6091 4.607 1.2914 1.2887 1.2914 1.2887 2.609 2.6034 4.3948 4.9165 4.5111 8.9675 4.3858 15.405-0.56852 5.3015-3.0912 7.7538-6.8125 11.289-5.0578 2.3483-10.017 2.596-15.5 1.625-4.2025-2.5341-7.6286-5.3805-11.087-8.8469-0.47474-0.47303-0.94947-0.94605-1.4386-1.4334-1.5754-1.5721-3.1436-3.1512-4.7118-4.7305-1.1334-1.134-2.2673-2.2676-3.4016-3.4007-3.0681-3.0675-6.13-6.1412-9.1908-9.2159-3.2035-3.216-6.4127-6.4263-9.6212-9.6373-6.0706-6.0768-12.136-12.159-18.2-18.242-6.9054-6.9277-13.816-13.85-20.728-20.771-14.213-14.234-28.419-28.476-42.621-42.722-3.3445 2.2273-6.684 4.4591-9.9961 6.7344-31.124 21.219-64.542 32.734-102.44 32.641-0.83433-5.4382e-4 -1.6687-0.0010876-2.5283-0.001648-13.682-0.040884-26.725-0.98695-40.034-4.3734-0.84579-0.20899-1.6916-0.41798-2.563-0.6333-31.024-7.8813-57.443-24.441-80.437-46.367-0.79148-0.73863-1.583-1.4773-2.3984-2.2383-21.547-20.678-36.258-49.752-43.852-78.324-0.36956-1.3817-0.36956-1.3817-0.74658-2.7913-3.5034-13.761-4.3825-27.212-4.3159-41.334 0.0024875-0.8421 0.004975-1.6842 0.0075378-2.5518 0.055534-12.146 0.29068-23.932 3.305-35.761 0.22575-0.91282 0.45149-1.8256 0.68408-2.7661 7.976-31.467 22.985-58.669 45.316-82.234 0.84176-0.89461 1.6835-1.7892 2.5508-2.7109 28.801-29.759 72.128-50.24 113.88-50.492zm-86.426 70.203c-0.82105 0.73622-0.82105 0.73622-1.6587 1.4873-25.155 22.97-42.905 57.658-44.502 91.975-0.04602 3.9711-0.085529 7.9412-0.088867 11.913-6.7474e-4 0.71842-0.0013495 1.4368-0.0020447 2.177 0.016119 10.793 0.53629 20.951 3.252 31.448 0.15034 0.64759 0.30067 1.2952 0.45557 1.9624 4.2727 18.338 12.954 36.231 24.544 51.038 1.0577 1.3864 1.0577 1.3864 2.1367 2.8008 13.196 16.749 29.016 29.324 47.863 39.199 1.146 0.60586 2.292 1.2117 3.4727 1.8359 14.02 7.118 29.887 11.655 45.527 13.164 1.2517 0.13277 2.5034 0.26555 3.793 0.40234 35.237 3.2137 72.789-7.6194 100.34-29.957 9.3828-8.0132 18.428-16.069 25.801-26.008 0.51651-0.69472 1.033-1.3894 1.5652-2.1052 4.7455-6.4926 8.788-13.187 12.497-20.332 0.60457-1.1447 1.2091-2.2894 1.832-3.4688 3.635-7.1532 6.2482-14.452 8.4805-22.156 0.36376-1.2512 0.36376-1.2512 0.73486-2.5276 3.337-12.13 4.3329-24.046 4.2651-36.597-0.0018228-0.70344-0.0036456-1.4069-0.0055237-2.1316-0.046453-10.66-0.59761-20.758-3.307-31.118-0.17692-0.69545-0.35385-1.3909-0.53613-2.1074-9.8896-38.294-34.447-69.803-68.214-90.143-54.969-29.977-121.69-22.517-168.25 19.25z"/>
        </svg>

            </div>
            <div className="homesearchcategories">
                <div className="searchcategoryitem">
                3D Illustrations
                <img src={searchcategoryicon} alt="Search Category Icon" />
                </div>
                <div className="searchcategoryitem">
                Vector Icons
                <img src={searchcategoryicon} alt="Search Category Icon" />
                </div>
                <div className="searchcategoryitem">
                Lottie Animations
                <img src={searchcategoryicon} alt="Search Category Icon" />
                </div>
            </div>
        
        </div>
        </div>
    </div>
    <div className="homebanner-right">
        <img src={bannerimg} alt="" />
        
        </div>
</div>


</div>
<div className="popular-category-section">
<div className="popularcategory-div">
<div className="mostpopularcategory">
Most Popular Categories <svg fill="none" viewBox="0 0 52 31" xmlns="http://www.w3.org/2000/svg">
<path d="M49 3L28.5556 23L18.3333 13L3 28M49 3H33.6667M49 3V18" stroke="#2E90EB" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
</svg>

</div>

<div className="viewall-div">
View All <svg fill="none" viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">
<path d="m18.444 28 8.2223-8m0 0-8.2223-8m8.2223 8h-24.667m3.1153 10c3.3187 4.8239 8.9705 8 15.385 8 10.217 0 18.5-8.0589 18.5-18 0-9.9412-8.2827-18-18.5-18-6.4142 0-12.066 3.176-15.385 8" stroke="#2E90EB" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
</svg>
</div>
</div>

<div className="categories-div">
    <div className="categoryitem categoryitem1">
        <img src={threedicon} alt="" className="icon-img" />
        <p>3D Illustrations</p>
    </div>
    <div className="categoryitem categoryitem2">
        <img src={vectoricon} alt="" className="icon-img" />
        <p>Vector Icons</p>
    </div>
    <div className="categoryitem categoryitem3">
        <img src={lotteicon} alt="" className="icon-img" />
        <p>Lotte Animations</p>
    </div>
    <div className="categoryitem categoryitem4">
        <img src={freeasseticon} alt="" className="icon-img" />
        <p>Free Assets</p>
    </div>
</div>
</div>

<Footer></Footer>


    </Fragment>
    
    


}